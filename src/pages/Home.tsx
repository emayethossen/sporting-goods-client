
import DiscoverProducts from "@/components/DiscoverProducts/Discoverproducts";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { SliderSection } from "@/components/SliderSection/SliderSection";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <div className="lg:w-5/6 mx-auto">
      <FeaturedProducts />
      <div className="hidden lg:flex">
      <DiscoverProducts />
      </div>
      <HeroSection />
      <ImageGallery />
      </div>
    </div>
  );
};

export default Home;
