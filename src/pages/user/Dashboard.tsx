import React from 'react';
import { Link } from 'react-router-dom';

// Mock Data for User Dashboard Overview
const mockUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/100', // Replace with actual profile picture
    totalOrders: 15,
    totalSpent: 1200,
    wishlistItems: 8,
    recentOrders: [
        { id: '1', date: '2024-12-01', total: 150 },
        { id: '2', date: '2024-11-25', total: 200 },
    ],
};

const UserDashboardOverview: React.FC = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-8 py-8 px-4 sm:px-6 lg:px-8">
            {/* Left Column: User Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                    <img
                        src={mockUserData.profilePicture}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold">{mockUserData.name}</h2>
                        <p className="text-gray-500">{mockUserData.email}</p>
                    </div>
                </div>
            </div>

            {/* Middle Column: Quick Stats */}
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="text-xl font-bold">{mockUserData.totalOrders}</h4>
                        <p className="text-gray-500">Total Orders</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="text-xl font-bold">${mockUserData.totalSpent}</h4>
                        <p className="text-gray-500">Total Spent</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="text-xl font-bold">{mockUserData.wishlistItems}</h4>
                        <p className="text-gray-500">Wishlist Items</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Recent Orders */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
                <ul className="space-y-4">
                    {mockUserData.recentOrders.map((order) => (
                        <li key={order.id} className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Order #{order.id}</p>
                                <p className="text-gray-500">Date: {order.date}</p>
                            </div>
                            <p className="text-xl font-semibold">${order.total}</p>
                        </li>
                    ))}
                </ul>
                <Link to="/user/orders" className="text-blue-500 hover:underline mt-4 block text-center">
                    View All Orders
                </Link>
            </div>

            {/* Call to Action Button */}
            <div className="lg:col-span-3 text-center mt-6">
                <Link
                    to="/user/profile"
                    className="px-6 py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default UserDashboardOverview;
