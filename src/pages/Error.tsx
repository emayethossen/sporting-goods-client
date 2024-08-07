
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import animation from "../assets/error.json";

const Error = () => {
  const error = useRouteError() as { message: string };

  return (
    <div>
      <div>
        <div className="w-full lg:w-1/2 lg:mx-auto">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
      <div className="lg:w-1/2 lg:mx-auto text-center">
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          {error?.message}
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold text-center rounded bg-cyan-200 mb-8 text-gray-900"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
