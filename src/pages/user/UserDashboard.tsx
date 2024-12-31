import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate
import { User, ShoppingCart, MapPin, Heart, LayoutDashboard, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../redux/features/authSlice';
import webLogo from "../../assets/social-icon/nav-logo.png";

const UserDashboard: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use navigate hook

    const handleLogout = () => {
        dispatch(logoutAction());
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/login'); // Use navigate to go to the login page
    };

    return (
        <div className="container mx-auto grid grid-cols-5 min-h-screen">

            {/* Sidebar */}
            <aside className="bg-gray-100 sticky top-0 h-screen overflow-y-auto">
                <div className="flex items-center justify-center py-6 border-b">
                    <Link to="/">
                        <img src={webLogo} alt="Logo" className="h-12 w-auto" />
                    </Link>
                </div>
                <nav className="flex-grow mt-4 space-y-2 p-4">
                    <SidebarItem to="/user/dashboard" label="Dashboard" Icon={LayoutDashboard} />
                    <SidebarItem to="/user/profile" label="Profile Management" Icon={User} />
                    <SidebarItem to="/user/orders" label="Orders/Purchases" Icon={ShoppingCart} />
                    <SidebarItem to="/user/address" label="Address Book" Icon={MapPin} />
                    <SidebarItem to="/user/wishlist" label="Wishlist/Save Items" Icon={Heart} />
                </nav>
                <div className="p-4 border-t">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                    >
                        <LogOut className="mr-3 h-5 w-5" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="col-span-4 p-4">
                <Outlet />
            </div>
        </div>
    );
};

interface SidebarItemProps {
    to: string;
    label: string;
    Icon: React.ElementType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, label, Icon }) => (
    <Link
        to={to}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-200"
    >
        <Icon className="mr-3 h-5 w-5" />
        <span className="text-lg font-semibold">{label}</span>
    </Link>
);

export default UserDashboard;
