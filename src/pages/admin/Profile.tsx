import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetUserQuery, useUpdateUserMutation } from '../../redux/features/authApi';
import { logout } from '../../redux/features/authSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const { data: response, isLoading, isError } = useGetUserQuery("");
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (response && response.success) {
            setFormData({
                name: response.data.name,
                phone: response.data.phone,
                address: response.data.address,
            });
        }
    }, [response]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await updateUser(formData).unwrap();
            alert('Profile updated successfully!');
            setIsModalOpen(false); // Close modal on success
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (isError) {
        dispatch(logout());
        return <p className="text-center text-red-500">Error fetching user data. Please log in again.</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Profile</h2>
            <div className="mb-6">
                <p><strong>Name:</strong> {response.data.name}</p>
                <p><strong>Phone:</strong> {response.data.phone}</p>
                <p><strong>Address:</strong> {response.data.address}</p>
            </div>
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
                Edit Profile
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                        <h3 className="text-lg font-bold mb-4">Edit Profile</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isUpdating}
                                className={`w-full mt-4 py-2 px-4 border border-transparent rounded-md text-white font-semibold ${isUpdating ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring focus:ring-blue-500`}
                            >
                                {isUpdating ? 'Updating...' : 'Update Profile'}
                            </button>
                        </form>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 w-full text-center text-gray-700 underline"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
