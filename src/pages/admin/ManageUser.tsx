import React from 'react';
import { useGetAllUsersQuery, usePromoteUserToAdminMutation, useDeleteUserMutation } from '../../redux/features/userApi';

const ManageUser: React.FC = () => {
    const { data, error, isLoading } = useGetAllUsersQuery("");
    const [promoteUserToAdmin, { isLoading: isPromoting }] = usePromoteUserToAdminMutation();
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div>Loading....</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <div className="text-xl font-semibold text-red-500">Error loading users.</div>
            </div>
        );
    }

    const user = data?.data;

    const handlePromoteUser = async (userId: string) => {
        try {
            await promoteUserToAdmin(userId).unwrap();
            alert('User promoted to admin successfully!');
        } catch (error) {
            console.error('Failed to promote user:', error);
            alert('Failed to promote user to admin.');
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(userId).unwrap();
                alert('User deleted successfully!');
            } catch (error) {
                console.error('Failed to delete user:', error);
                alert('Failed to delete user.');
            }
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="md:text-2xl text-xl font-semibold mb-4">User Management</h2>
            {user && user.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 border-b md:grid grid-cols-5">
                                <th className="p-3 hidden md:flex justify-center items-center text-center text-sm font-semibold text-gray-700">ID</th>
                                <th className="p-3 text-center text-sm font-semibold text-gray-700">Name</th>
                                <th className="p-3 hidden md:flex justify-center items-center text-center text-sm font-semibold text-gray-700">Email</th>
                                <th className="p-3 hidden md:flex justify-center items-center text-center text-sm font-semibold text-gray-700">Role</th>
                                <th className="p-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user: any) => (
                                <tr key={user._id} className="md:grid grid-cols-5">
                                    <td className="p-3 hidden md:block text-center text-sm text-gray-700">{user._id}</td>
                                    <td className="p-3 text-center text-sm text-gray-700">{user.name}</td>
                                    <td className="p-3 hidden md:block text-center text-sm text-gray-700">{user.email}</td>
                                    <td className="p-3 hidden md:block text-center text-sm text-gray-700">{user.role}</td>
                                    <td className="text-center text-sm text-gray-700 grid md:grid-cols-2 justify-center items-center md:space-x-2 space-y-2">
                                        {user.role !== 'admin' && (
                                            <button
                                                onClick={() => handlePromoteUser(user._id)}
                                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                                                disabled={isPromoting}
                                            >
                                                {isPromoting ? 'Promoting...' : 'Promote'}
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? 'Deleting...' : 'Delete'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-lg">No users found.</p>
            )}
        </div>
    );
};

export default ManageUser;
