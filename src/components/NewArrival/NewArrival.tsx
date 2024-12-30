import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useGetProductsQuery } from '../../redux/features/productsApi'; // Import the query hook
import { Product } from '../../types/ProductsTypes'; // Assuming a types file exists
import SingleProduct from '../../pages/SingleProduct'; // Assuming this is a component to display each product

const NewArrivals: React.FC = () => {
    const { data, error, isLoading } = useGetProductsQuery(''); // Fetch products using RTK Query
    const [sportsProducts, setSportsProducts] = useState<Product[]>([]);
    const [basketballProducts, setBasketballProducts] = useState<Product[]>([]);
    const [tennisProducts, setTennisProducts] = useState<Product[]>([]);
    const products = data?.data || [];
    // Filter products by category whenever the data changes
    useEffect(() => {
        if (products) {
            console.log(data.data)
            setSportsProducts(products.filter((product: Product) => product.category === 'Sports'));
            setBasketballProducts(products.filter((product: Product) => product.category === 'basketball'));
            setTennisProducts(products.filter((product: Product) => product.category === 'tennis'));
        }
    }, [data]);

    // Loading and error handling
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products</div>;
    }

    return (
        <div className="text-center lg:mx-16">
            <h2 className="text-3xl lg:text-5xl font-bold my-6 text-[#FF69B4]">New Arrivals</h2>
            <Tabs className="font-bold">
                <TabList className="grid lg:grid-cols-3 grid-cols-2 lg:gap-12 justify-center">
                    <Tab>Sports</Tab>
                    <Tab>Basketball</Tab>
                    <Tab>Tennis</Tab>
                </TabList>

                <TabPanel>
                    <div className="w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6">
                        {
                            sportsProducts.slice(0, 3).map(product => (
                                <SingleProduct key={product._id} product={product} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6">
                        {
                            basketballProducts.slice(0, 3).map(product => (
                                <SingleProduct key={product._id} product={product} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="w-3/4 lg:w-full mx-auto grid lg:grid-cols-3 gap-6 my-6">
                        {
                            tennisProducts.slice(0, 3).map(product => (
                                <SingleProduct key={product._id} product={product} />
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default NewArrivals;
