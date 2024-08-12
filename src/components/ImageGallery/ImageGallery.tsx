import img1 from '../../assets/images/1 (1).jpg';
import img2 from '../../assets/images/1 (10).jpg';
import img3 from '../../assets/images/1 (11).jpg';
import img4 from '../../assets/images/1 (2).jpg';
import img5 from '../../assets/images/1 (3).jpg';
import img6 from '../../assets/images/1 (4).jpg';
import img7 from '../../assets/images/1 (6).jpg';
import img8 from '../../assets/images/1 (5).jpg';
import img9 from '../../assets/images/1 (7).jpg';
import img10 from '../../assets/images/1122.jpg';
import img11 from '../../assets/images/img2.jpg';

const ImageGallery = () => {
    return (
        <div className='py-8'>
            <h2 className="text-2xl font-bold text-center mb-6">Image Gallery</h2>
            <div className="rounded-2xl p-6 grid bg-[#F8FAFC] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <img
                        src={img1}
                        alt="Image 4"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className='hidden md:flex'>
                    <img
                        src={img2}
                        alt="Image 5"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <img
                        src={img3}
                        alt="Image 6"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className='hidden md:flex'>
                    <img
                        src={img4}
                        alt="Image 7"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className='hidden md:flex'>
                    <img
                        src={img5}
                        alt="Image 7"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="hidden md:flex sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <img
                        src={img6}
                        alt="Image 8"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div>
                    <img
                        src={img7}
                        alt="Image 4"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="hidden md:flex sm:col-span-2 md:col-span-2 lg:col-span-2">
                    <img
                        src={img8}
                        alt="Image 6"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className='hidden md:flex'>
                    <img
                        src={img9}
                        alt="Image 8"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={img10}
                        alt="Image 8"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={img11}
                        alt="Image 8"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
