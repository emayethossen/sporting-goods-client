import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import EditPostModal from './EditBlogModal';

interface Blog {
    _id: string;
    title: string;
    author: string;
    coverImage: string;
    isPremium: boolean;
    createdAt: string;
    content: string; // Include content for editing
    category: string; // Include category for editing
}

const ManageBlog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://sporting-goods-server-murex.vercel.app/api/blogs");
                if (!response.ok) throw new Error("Failed to fetch blogs");
                const data = await response.json();
                if (data.success && Array.isArray(data.blogs)) {
                    setBlogs(data.blogs);
                } else {
                    console.error("Expected an array but got:", data);
                    setBlogs([]);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (blogId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            try {
                const response = await fetch(`https://sporting-goods-server-murex.vercel.app/api/blogs/${blogId}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Failed to delete blog");
                setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
                alert("Blog deleted successfully");
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("There was an error deleting the blog.");
            }
        }
    };

    const handleAddBlog = () => {
        navigate("/admin/create-blog");
    };

    const handleEdit = (blog: Blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    const handleUpdatePost = async (updatedPost: { title: string; content: string; coverImage: string; category: string; isPremium: boolean }) => {
        try {
            const response = await fetch(`https://sporting-goods-server-murex.vercel.app/api/blogs/${selectedBlog?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (!response.ok) throw new Error('Failed to update blog');

            setBlogs((prevBlogs) =>
                prevBlogs.map((blog) =>
                    blog._id === selectedBlog?._id ? { ...blog, ...updatedPost } : blog
                )
            );

            alert("Blog updated successfully");
            handleCloseModal();
        } catch (error) {
            console.error("Error updating blog:", error);
            alert("There was an error updating the blog.");
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-6">Manage Blogs</h1>

            <div className="flex justify-end mb-4">
                <button
                    onClick={handleAddBlog}
                    className="py-3 px-6 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Add Blog
                </button>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                {loading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    </div>
                ) : (
                    <table className="min-w-full bg-white table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Title</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Author</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Created At</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(blogs) && blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <tr key={blog._id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-4 px-6 text-sm">{blog.title}</td>
                                        <td className="py-4 px-6 text-sm">Emayet Hossen</td>
                                        <td className="py-4 px-6 text-sm">{format(new Date(blog.createdAt), "MMMM dd, yyyy")}</td>
                                        <td className="py-4 px-6 text-sm flex gap-2">
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-400"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog._id)}
                                                className="py-2 px-4 bg-red-500 text-white rounded-md font-semibold hover:bg-red-400"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="py-4 text-center text-sm text-gray-600">No blogs available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Edit Post Modal */}
            <EditPostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleUpdatePost}
                postData={selectedBlog}
            />
        </div>
    );
};

export default ManageBlog;
