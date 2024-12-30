import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

interface BlogForm {
  title: string;
  content: string;
  author: string;
  coverImage: string; 
  isPremium: boolean;
  tags: string; 
}

const BlogModal = () => {
  const { register, handleSubmit, control, reset } = useForm<BlogForm>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: BlogForm) => {
    setLoading(true);

    try {
      // Send a POST request to your API to save the blog
      const response = await fetch("https://sporting-goods-server-murex.vercel.app/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });

      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }

      // Reset form after successful submission
      reset();
      alert("Blog submitted successfully!");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("There was an error submitting your blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Create New Blog</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 mx-auto space-y-6">
        {/* Title Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="font-semibold text-lg">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
            placeholder="Enter your blog title"
          />
        </div>

        {/* Author Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="author" className="font-semibold text-lg">
            Author Name
          </label>
          <input
            id="author"
            type="text"
            {...register("author", { required: true })}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
            placeholder="Enter author name"
          />
        </div>

        {/* Cover Image URL Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="coverImage" className="font-semibold text-lg">
            Cover Image URL
          </label>
          <input
            id="coverImage"
            type="text"
            {...register("coverImage", { required: true })}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
            placeholder="Enter image URL for cover"
          />
        </div>

        {/* Tags Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="tags" className="font-semibold text-lg">
            Tags (comma-separated)
          </label>
          <input
            id="tags"
            type="text"
            {...register("tags", { required: true })}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
            placeholder="Enter tags, separated by commas"
          />
        </div>

        {/* Premium Checkbox */}
        {/* <div className="flex items-center space-x-2">
          <input
            id="isPremium"
            type="checkbox"
            {...register("isPremium")}
            className="focus:outline-none focus:ring-2 focus:ring-[#F95C6B] transition"
          />
          <label htmlFor="isPremium" className="font-semibold text-lg">
            Is this a premium blog?
          </label>
        </div> */}

        {/* Content Input (ReactQuill) */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="content" className="font-semibold text-lg">
            Blog Content
          </label>
          <Controller
            control={control}
            name="content"
            rules={{ required: true }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Write your blog content here..."
              />
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-gradient-to-r from-[#F95C6B] to-[#E51284] text-white rounded-md font-semibold hover:from-red-200 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogModal;
