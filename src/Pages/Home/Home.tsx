const Home = () => {
  return (
    <div className="container p-8 ">
      <div className="md:flex block justify-between items-center bg-gray-700 rounded-2xl md:p-10">
        <div className="p-5 md:w-[70%]">
          <h1 className="md:text-xl text-l font-bold mb-4 text-[#e2e8f0]">
            Welcome to XENTO Dashboard
          </h1>
          <p className=" text-[#e2e8f0] text-xs">
            Discover the latest in tech with our electronics e-commerce
            platform, offering a wide range of smartphones, tablets, and pads.
            Enjoy seamless shopping, exclusive deals, and fast delivery on
            top-brand devices!
          </p>
        </div>
        <div className="md:block hidden">
          <img
            src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1738862395/Hero-logo_ku5i0a.png"
            className="size-50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
