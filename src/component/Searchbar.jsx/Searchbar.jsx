const Searchbar = () => {
  return (
    <div className="flex flex-col items-center md:pt-28 pt-10 md:pb-40 pb-16">
      <h2 className="text-center md:text-5xl text-2xl mb-10 font-bold">
        I Grow By Helping People In Need
      </h2>
      <div className=" md:w-2/4 w-full ">
        <input
          className="lg:w-4/5 w-full p-4 bg-transparent focus:outline-none border border-[#1111111A] lg:rounded-l-lg lg:rounded-none rounded-md lg:mb-0 mb-3"
          type="text"
          placeholder="Search here...."
          name=""
          id=""
        />
        <button className="bg-primaryColor lg:w-1/5 w-full  p-4 border-2 border-primaryColor lg:rounded-r-lg lg:rounded-none rounded-md md:mb-0 mb-3">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
