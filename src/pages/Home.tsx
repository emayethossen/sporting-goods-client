
import AllBlogs from "@/components/Blogcard/Latestblog";
import DiscoverProducts from "@/components/DiscoverProducts/Discoverproducts";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import NewArrivals from "@/components/NewArrival/NewArrival";
// import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Newsletter from "@/components/Newsletter/Newsletter";
import { SliderSection } from "@/components/SliderSection/SliderSection";

const Home = () => {
  return (
    <div>
      <div>
        <SliderSection />
      </div>
      <div className="container mx-auto md:px-12 px-6 py-8 space-y-8">

        {/* <div className="lg:w-5/6 mx-auto "> */}
        <FeaturedProducts />
        {/* <HeroSection /> */}
        <NewArrivals />
        <AllBlogs />
        <div className="hidden lg:flex">
          <DiscoverProducts />
        </div>
        <Newsletter />
        {/* <ImageGallery /> */}
      </div>
    </div>
    // </div>
  );
};

export default Home;
