import { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from '../assets/images/abstract-volleyball-player-jumping-from-splash-watercolors-illustration-paints_291138-423.jpg';
import { useLoginMutation } from '../redux/features/authApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate input
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();
      console.log('Full login response:', response);

      if (!response.data) {
        throw new Error('User data is missing');
      }

      const { data: user, token } = response;

      dispatch(setUser({ user, token }));
      localStorage.setItem('token', token);

      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'user') {
        navigate('/user/dashboard');
      } else {
        setErrorMessage('Unknown user role');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please check your credentials and try again.');
    }
  };


  return (
    <div className="container mx-auto grid lg:grid-cols-2 shadow-2xl rounded lg:px-36 lg:py-16 p-6 bg-[#ffe5ea]">
      <div
        className="md:flex hidden flex-col justify-between bg-cover bg-center lg:p-10 relative rounded overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center gap-2">
          <Link  className="p-2 rounded text-white bg-green-500 font-semibold" to='/'>Back to Homepage</Link>
        </div>
        <div className="relative z-10 text-white mb-6">
          <h2 className="text-2xl font-semibold">Sport Quest</h2>
          <p className="mt-2">
          Your one-stop shop for premium sports gear, apparel, and accessories—designed to boost your game and style!
          </p>
        </div>
      </div>

      <div className="lg:border w-full lg:p-14 p-6 bg-white">
        <h2 className="md:text-3xl text-xl font-bold text-center uppercase">Sport Quest</h2>
        <p className="md:text-xl text-lg mb-6 font-bold text-center">Sign In To Your Account</p>
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
        <form className="form-control space-y-4" onSubmit={handleLogin}>
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
          <div className="flex items-center justify-between my-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <p className="flex items-center text-red-300 cursor-pointer" onClick={() => navigate('/recover-password')}>
              Forget Password?
            </p>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
          <input
            type="submit"
            value="Login"
            className="p-2 rounded text-white bg-green-500 font-semibold w-full"
            disabled={isLoading} 
          />
          <p className="mt-2 text-center">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/register')}>Register here</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;