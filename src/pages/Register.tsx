import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegisterMutation } from '../redux/features/authApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../assets/images/women-s-volleyball-vector-illustration-volleyball-player-with-ball-drawn-with-paint-drops_1028306-269.jpg'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role] = useState('user');
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate input
    if (!name || !email || !password || !phone || !address) {
      toast.warn('Please fill in all fields');
      return;
    }

    try {
      const data = await register({ name, email, password, phone, address, role }).unwrap();

      if (data.success) {
        navigate('/login');
        toast.success('Registration successful! Please login.');
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Registration failed');
    }
  };

  return (
    <div className="container mx-auto grid lg:grid-cols-2 shadow-2xl lg:px-36 lg:py-16 p-6 bg-[#ffe5ea]">
      <div
        className="md:flex hidden flex-col justify-between bg-cover bg-center lg:p-10 relative rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Black overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex items-center gap-2">
        <Link  className="p-2 rounded text-white bg-green-500 font-semibold" to='/'>Back to Homepage</Link>
        </div>

        <div className="relative z-10 text-white mb-6">
          <h2 className="text-2xl font-semibold">Sports Quest</h2>
          <p className="mt-2">
          Your one-stop shop for premium sports gear, apparel, and accessories—designed to boost your game and style!
          </p>
        </div>
      </div>

      <div className="lg:border w-full lg:p-14 p-6 bg-white">
        <h2 className="md:text-3xl text-xl font-bold text-center uppercase">Sport Quest</h2>
        <p className="md:text-xl text-lg mb-6 font-bold text-center">Create An Account</p>
        <div className="grid grid-cols-4 md:w-1/2 w-3/4 mx-auto justify-center items-center gap-2">
          <button className="btn btn-outline w-[32px] md:w-[48px] rounded flex justify-center items-center h-[32px] md:h-[48px] bg-red-500">
            <FontAwesomeIcon icon={faGoogle} className="text-white p-4 rounded bg-red-500" />
          </button>

          <button className="btn btn-outline w-[32px] md:w-[48px] rounded flex justify-center items-center h-[32px] md:h-[48px] bg-blue-600">
            <FontAwesomeIcon icon={faFacebookF} className="text-white p-4 rounded bg-blue-600" />
          </button>

          <button className="btn btn-outline w-[32px] md:w-[48px] rounded flex justify-center items-center h-[32px] md:h-[48px] bg-blue-400">
            <FontAwesomeIcon icon={faTwitter} className="text-white p-4 rounded bg-blue-400" />
          </button>

          <button className="btn btn-outline w-[32px] md:w-[48px] rounded flex justify-center items-center h-[32px] md:h-[48px] bg-blue-700">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white p-4 rounded bg-blue-700" />
          </button>
        </div>
        <div className="flex items-center justify-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form className="form-control space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            className="input py-2 px-4 rounded bg-gray-100 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Register"
            className="p-2 rounded text-white bg-green-500 font-semibold w-full"
          />
          <p className="mt-2 text-center">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login here</span></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
