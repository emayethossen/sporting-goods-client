import img from "../../assets/images/helmett.png";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-[#1A1A1A] rounded-lg shadow-md">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={img}
          alt="Newsletter Image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Text and Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white text-sm sm:text-base mb-6">
          Stay updated with the latest news, events, and exclusive offers. Join
          our community today!
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email..."
            className="p-3 w-full sm:w-auto flex-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#6495ED] to-[#4A90E2] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition uppercase font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
