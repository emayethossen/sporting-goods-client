
import img from '../../assets/images/pexels-dom-j-7304-45056.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const DiscoverProducts = () => {
    const products = [
        {
            title: 'Sale collection',
            description: 'Up to 80% off retail',
            backgroundColor: '#FEFCE8',
        },
        {
            title: 'Digital gift cards',
            description: 'Give the gift of choice',
            backgroundColor: '#FEF2F2',
        },
        {
            title: 'Explore new arrivals',
            description: 'Shop the latest from top brands',
            backgroundColor: '#EFF6FF',
        },
        {
            title: 'Best Sellers',
            description: 'Top products of the month',
            backgroundColor: '#E0F7FA',
        },
        {
            title: 'Limited Edition',
            description: 'Exclusive products for u',
            backgroundColor: '#E8EAF6',
        },
    ];

    return (
        <div>
            <h1 className='text-3xl text-gray-600 font-bold p-4 my-8'>
                <span className='text-gray-500'>Discover more.</span> Good things are waiting for you
            </h1>

            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-3 grid-cols-2" 
                            style={{ backgroundColor: product.backgroundColor }}>
                        <CardContent className="md:p-6 p-3 flex flex-col justify-between md:col-span-2">
                            <h2 className="text-gray-600 mb-6">{product.title}</h2>
                            <p className="text-2xl font-bold text-gray-800 mb-4">
                                {product.description}
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                Show All
                            </button>
                        </CardContent>
                        <div className="flex justify-center items-center mr-4">
                            <img
                                src={img}
                                alt="Card Image"
                                className="object-cover rounded-2xl h-[100px] w-[150px]"
                            />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
    );
};

export default DiscoverProducts;
