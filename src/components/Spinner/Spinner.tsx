const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>

      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        alt="Loading Avatar"
        className="rounded-full h-28 w-28"
      />
    </div>
  );
};

export default Spinner;
