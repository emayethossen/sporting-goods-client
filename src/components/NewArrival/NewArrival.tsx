import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useGetProductsQuery } from '../../redux/features/productsApi';
import { Product } from '../../types/ProductsTypes';
import SingleProductCard from '../SingleProduct/SingleProduct';

const NewArrivals: React.FC = () => {
    const { data, error, isLoading } = useGetProductsQuery(''); // Fetch products using RTK Query
    const [sportsProducts, setSportsProducts] = useState<Product[]>([]);
    const [fitnessProducts, setFitnessProducts] = useState<Product[]>([]);
    const [tennisProducts, setTennisProducts] = useState<Product[]>([]);
    const products = data?.data || []; // Ensure products fallback to an empty array

    // Filter products by category whenever the data changes
    useEffect(() => {
        if (products && Array.isArray(products)) {
            setSportsProducts(products.filter((product: Product) => product?.category?.toLowerCase() === 'sports'));
            setFitnessProducts(products.filter((product: Product) => product?.category?.toLowerCase() === 'fitness'));
            setTennisProducts(products.filter((product: Product) => product?.category?.toLowerCase() === 'tennis'));
        } else {
            console.error("Invalid products data:", products);
        }
    }, [products]);

    // Loading and error handling
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products</div>;
    }

    return (
        <div className="">
            <div className='mb-8'>
                <h2 className="text-3xl font-bold text-center">New Arrivals</h2>
                <p className="font-semibold text-center">Articles and blog posts on portfolios, freelancing and Emayet Portfolio.</p>
            </div>
            <Tabs className="font-bold">
                <TabList className="grid lg:grid-cols-3 grid-cols-3 lg:gap-12 justify-center mb-6 text-center">
                    <Tab>Sports</Tab>
                    <Tab>Fitness</Tab>
                    <Tab>Tennis</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            sportsProducts.length > 0
                                ? sportsProducts.slice(0, 3).map(product => (
                                    <SingleProductCard key={product._id} product={product} />
                                ))
                                : <div>No products found for Sports.</div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            fitnessProducts.length > 0
                                ? fitnessProducts.slice(0, 3).map(product => (
                                    <SingleProductCard key={product._id} product={product} />
                                ))
                                : <div>No products found for Fitness.</div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            tennisProducts.length > 0
                                ? tennisProducts.slice(0, 3).map(product => (
                                    <SingleProductCard key={product._id} product={product} />
                                ))
                                : <div>No products found for Tennis.</div>
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default NewArrivals;