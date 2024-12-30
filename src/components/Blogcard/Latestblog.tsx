

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from 'lucide-react';
// import { ThumbsDown, ThumbsUp } from "lucide-react";
import { format } from "date-fns";

interface Blog {
    _id: string;
    title: string;
    author: string;
    coverImage: string;
    isPremium: boolean;
    createdAt: string;
    content: string;
    upvotes: number;
    downvotes: number;
}

const AllBlogs: React.FC = () => {
    // const DEFAULT_AVATAR_URL = 'https://i.ibb.co.com/0jPH8hR/avatardefault-92824.png';
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://sporting-goods-server-murex.vercel.app/api/blogs");
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                const data = await response.json();
                setBlogs(data.blogs);
            } catch (err) {
                setError("Error fetching blogs. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // const truncateContent = (content: string, maxLength: number) => {
    //     const plainText =
    //         new DOMParser().parseFromString(content, "text/html").body.textContent || "";
    //     return plainText.length > maxLength
    //         ? plainText.substring(0, maxLength) + "..."
    //         : plainText;
    // };

    const handleReadMore = (id: string) => {
        navigate(`/blogs/${id}`); // Assuming the blog details page is at this route
    };

    return (
        <div className="">
            <div className='mb-8'>
                <h2 className="text-3xl font-bold text-center">Latest Blog</h2>
                <p className="font-semibold text-center">Articles and blog posts on portfolios, freelancing and Emayet Portfolio.</p>
            </div>

            {loading ? (
                <p className="text-center">Loading blogs...</p>
            ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.slice(0, 3).map((blog) => (
                        <div key={blog._id} className="bg-white rounded-lg shadow-md">
                            <div className="text-center md:text-left gap-8 rounded-lg">
                                <div className="mx-auto mb-4 md:mb-0 shadow-md">
                                    <img
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        className="rounded-t-lg rounded-b-none object-cover w-full h-full"
                                    />
                                </div>

                                <div className="w-full md:flex flex-col justify-between space-y-4 px-6 py-8">

                                    <div className="flex items-center gap-2">
                                        {/* <p className="w-10 h-10 rounded-full">Calender</p> */}
                                        <CalendarDays />
                                        <div>
                                            {/* <p className="text-gray-600 font-bold">By <span className='text-[#F44A72]'>Emayet Hossen</span></p> */}
                                            <p className="text-gray-500 font-medium"><span className="font-bold"></span> {format(new Date(blog.createdAt), 'MMMM dd, yyyy')}</p>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 my-4">
                                        {blog.title}
                                    </h2>

                                    {/* <p className="text-gray-700 text-justify mb-4 font-medium">
                                        {truncateContent(blog.content, 80)}
                                    </p> */}

                                    <div className="flex ">
                                        <button
                                            onClick={() => handleReadMore(blog._id)}
                                            className="py-3 px-6 bg-gradient-to-r from-[#6495ED] to-[#4A90E2] text-white rounded-md font-semibold hover:bg-gradient-to-r hover:from-[#7EC8F4] hover:to-[#6495ED] focus:outline-none focus:ring-2 focus:ring-red-400"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBlogs;
