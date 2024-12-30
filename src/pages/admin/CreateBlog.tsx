import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; // Adjust the path as necessary

const CreatePost = () => {
    const { token } = useSelector((state: RootState) => state.auth); // Assuming your auth slice has a token property
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Tip');
    const [isPremium, setIsPremium] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const postData = { title, coverImage, content, isPremium, category };

        try {
            setLoading(true);
            if (!token) {
                throw new Error('No authentication token found.');
            }

            await axios.post('https://sporting-goods-server-murex.vercel.app/api/blogs', postData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Post created successfully!");
            setTitle('');
            setContent('');
            setCategory('Tip');
            setCoverImage('');
            setIsPremium(false);
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Failed to create post. Please try again.';
            setError(errorMessage);
            console.error('Error creating post:', err.response?.data || err);
        } finally {
            setLoading(false);
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'code-block'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'color', 'background', 'align', 'code-block'
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverImage">
                        Cover Image
                    </label>
                    <input
                        type="text"
                        placeholder="Cover image URL"
                        id="coverImage"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        modules={modules}
                        formats={formats}
                        className="h-40"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="Tip">Tip</option>
                        <option value="Story">Story</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            checked={isPremium}
                            onChange={(e) => setIsPremium(e.target.checked)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Premium Content</span>
                    </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
