import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardOverview: React.FC = () => {
    // Dummy data for the chart
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [300, 500, 100, 400, 200, 700],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Users" count="120" color="bg-[#E0F7FA]" />
                <StatCard title="Total Products" count="45" color="bg-[#FEF2F2]" />
                <StatCard title="Total Revenue" count="$5,340" color="bg-[#FEFCE8]" />
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-lg font-semibold mb-4">Sales Over the Last 6 Months</h2>
                <Bar data={chartData} />
            </div>

            {/* Recent Activities Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Activity</th>
                            <th className="py-2 px-4 border-b">User</th>
                            <th className="py-2 px-4 border-b">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Added a new product</td>
                            <td className="py-2 px-4 border-b">John Doe</td>
                            <td className="py-2 px-4 border-b">2024-10-10</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Updated blog post</td>
                            <td className="py-2 px-4 border-b">Jane Smith</td>
                            <td className="py-2 px-4 border-b">2024-10-12</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Deleted user account</td>
                            <td className="py-2 px-4 border-b">Admin</td>
                            <td className="py-2 px-4 border-b">2024-10-13</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// StatCard Component for displaying summary stats
const StatCard: React.FC<{ title: string; count: string; color: string }> = ({ title, count, color }) => (
    <div className={`${color} p-6 rounded-lg shadow-md`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{count}</p>
    </div>
);

export default DashboardOverview;
