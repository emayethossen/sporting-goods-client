import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/images/man.png'
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-xl my-4 md:p-12 bg-[#F8FAFC]">
      {/* Left Column */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Don't miss out on special offers
        </h1>
        <p className="text-gray-600">
          Register to receive news about the latest, savings combos, discount
          codes...
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <p className="text-blue-500 font-bold">01</p>
            <p className="text-gray-700">Saving combos</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <p className="text-blue-500 font-bold">02</p>
            <p className="text-gray-700">Freeship</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <p className="text-blue-500 font-bold">03</p>
            <p className="text-gray-700">Premium magazines</p>
          </div>
        </div>

        {/* Email Form */}
        <div className="mt-6 flex items-center justify-center md:justify-start">
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
          <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={img}
          alt="Man"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
