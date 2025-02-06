import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <img
          src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1738862232/xentro_nntjqf.png"
          alt=""
          className="mt-10 max-h-72"
        />
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-[#3a80f6] font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            This page does not exist
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Sorry! We could not find the page you are looking for. Please check
            URL in address bar and try again.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="px-5 py-2.5 rounded border border-transparent bg-[#3a80f6] text-center text-base text-white font-medium hover:bg-[#4a3af6]"
          >
            Get back to Homepage
          </Link>
          <a
            href="#link"
            className="px-5 py-2.5 rounded border-2 border-[#3a80f6] bg-transparent text-center text-base text-[#3a80f6] font-medium hover:border-[#3a80f6] hover:text-[#3a80f6]"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
