const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to our Sporting Goods Store. We are dedicated to providing
            high-quality equipment and accessories for all your sporting needs.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to inspire and support athletes of all levels by
              providing top-notch sporting goods that enhance performance and
              enjoyment.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where everyone has access to the best
              equipment and accessories to pursue their sporting passions and
              achieve their goals.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                For any inquiries or feedback, feel free to reach out to us
                using the contact information below.
              </p>
              <p className="text-lg font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">info@sportsstore.com</p>
              <p className="text-lg font-semibold text-gray-800 mt-4">Phone</p>
              <p className="text-gray-600">+1 123 456 7890</p>
            </div>
            <div className="text-center">
              {/* Optional: Add a contact form here if needed */}
              <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg mt-4 inline-block">
                Contact Form
              </button>
            </div>
          </div>
        </div>

        {/* Store Location */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Our Store Location
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              123 Sports Ave, Sportstown, ST 12345
            </p>
            <iframe
              title="Store Location"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1942144999484!2d-122.41941568468254!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806c65e4d89d%3A0x95a08c7a6d7e5173!2sSan+Francisco+Bay!5e0!3m2!1sen!2sus!4v1638861376321!5m2!1sen!2sus"
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;