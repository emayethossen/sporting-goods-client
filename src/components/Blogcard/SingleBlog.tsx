import React, { useEffect, useState } from 'react';
// import { ThumbsDownIcon, ThumbsUp } from 'lucide-react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

const BlogDetails: React.FC = () => {
    const DEFAULT_AVATAR_URL = 'https://i.ibb.co.com/0jPH8hR/avatardefault-92824.png';
    const { id } = useParams<{ id: string }>();
    const [blogData, setBlogData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`https://sporting-goods-server-murex.vercel.app/api/blogs/${id}`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch post: ${res.statusText}`);
                }

                const result = await res.json();
                console.log(result); // Log the result to check the structure

                // Extract blog data from the correct property
                if (!result.blog) {
                    throw new Error("Blog data is undefined");
                }

                setBlogData(result.blog);
            } catch (err:any) {
                setError(err.message || 'Error fetching blog details. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;
    if (!blogData) return <p className="text-center text-red-600">Blog not found.</p>;

    return (
        <div className="container mx-auto md:grid grid-cols-3 bg-white">
            <div className="col-span-2 py-8 px-4 sm:px-6">
                {blogData.coverImage && (
                    <img
                        src={blogData.coverImage}
                        alt={blogData.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
                    />
                )}
                <h1 className="text-4xl text-center font-bold md:mb-4 mb-2">{blogData.title}</h1>

                <div className="flex items-center justify-center md:py-4 gap-4 mb-3">
                    {/* <Link to={`/profile/${blogData.author?._id}`}> */}
                        <img
                            src={ DEFAULT_AVATAR_URL}
                            alt="Emayet Hossen"
                            className="w-10 h-10 rounded-full"
                        />
                    {/* </Link> */}
                    <p className="text-gray-600 font-bold">
                        By <span className="text-[#F44A72]">Emayet Hossen</span>
                    </p>
                    <p className="text-gray-500 font-medium">
                        {format(new Date(blogData.createdAt), 'MMMM dd, yyyy')}
                    </p>
                </div>

                {/* <div className="bg-white rounded-lg px-6 space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>Author: {blogData.author?.name}</p>
                        <p>Category: {blogData.category}</p>
                    </div>
                </div> */}
            </div>
            <div>
                Recent Blog
            </div>
        </div>
    );
};

export default BlogDetails;
