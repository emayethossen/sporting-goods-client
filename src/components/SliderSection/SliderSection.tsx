import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import sliderImage1 from '@/assets/images/pexels-enginakyurt-1552620.jpg';
import sliderImage2 from '@/assets/images/img2.jpg';
import sliderImage3 from '@/assets/images/img3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function SliderSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
      title: "Discover the Best Deals!",
      subtitle: "Exclusive offers just for you.",
      cta: "Shop Now",
    },
    {
      id: 2,
      image: sliderImage2,
      title: "Elevate Your Lifestyle",
      subtitle: "Premium quality products.",
      cta: "Explore More",
    },
    {
      id: 3,
      image: sliderImage3,
      title: "Unbeatable Prices!",
      subtitle: "Shop your favorites today.",
      cta: "Get Started",
    },
  ];

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto relative w-full h-[500px]">
      <Carousel
        className="overflow-hidden rounded-lg shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full relative">
              <div className="relative w-full h-[500px]">
                {/* Background image */}
                <img
                  src={slider?.image}
                  className="w-full h-full object-cover"
                  alt={slider?.title}
                />

                {/* Overlay with text */}
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white p-6">
                  <div className="lg:flex lg:gap-16 items-center justify-center lg:flex-row-reverse space-y-8 lg:space-y-0 w-full">
                    {/* Image on the left */}
                    <div data-aos="flip-left" className="flex justify-center items-center">
                      <img
                        src={slider?.image}
                        className="w-[400px] h-[420px] lg:w-[440px] lg:h-[480px] object-cover"
                        alt={slider?.title}
                      />
                    </div>

                    {/* Text content on the right */}
                    <div className="text-center lg:text-left space-y-4">
                      <h4 data-aos="flip-left" className="text-2xl lg:text-3xl font-semibold uppercase">{slider?.title}</h4>
                      <h2 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold">{slider?.subtitle}</h2>
                      <p data-aos="fade-down" className="bg-[#FF69B4] p-2 font-semibold w-80 rounded-xl ">
                        Up To <span className="text-2xl font-bold">60%</span> Off On Selected Items
                      </p>
                      <button
                        data-aos="flip-right"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                      >
                        {slider?.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation Arrows */}
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2">
          <CarouselPrevious
            className="btn btn-circle text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full mx-4"
          >
            ❮
          </CarouselPrevious>
          <CarouselNext
            className="btn btn-circle text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full mx-4"
          >
            ❯
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
