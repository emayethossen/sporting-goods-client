import React from 'react';

interface Address {
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    isDefault: boolean;
}

const AddressBook: React.FC = () => {
    // Predefined static addresses (example data)
    const addresses: Address[] = [
        {
            id: '1',
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'USA',
            isDefault: true,
        },
        {
            id: '2',
            street: '456 Elm St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001',
            country: 'USA',
            isDefault: false,
        },
        {
            id: '3',
            street: '789 Oak Ave',
            city: 'Chicago',
            state: 'IL',
            zip: '60601',
            country: 'USA',
            isDefault: false,
        },
    ];

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6">Manage Your Addresses</h2>

            {/* Address List */}
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Your Saved Addresses</h3>
                {addresses.length === 0 ? (
                    <p className="text-gray-500">You have no saved addresses.</p>
                ) : (
                    <ul className="space-y-4">
                        {addresses.map((address) => (
                            <li key={address.id} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{address.street}</p>
                                    <p>{address.city}, {address.state} {address.zip}</p>
                                    <p>{address.country}</p>
                                    {address.isDefault && <span className="text-green-500">Default Address</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Button to add new address */}
            <div className="flex justify-center mt-6">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    disabled
                >
                    Add New Address
                </button>
            </div>
        </div>
    );
};

export default AddressBook;
