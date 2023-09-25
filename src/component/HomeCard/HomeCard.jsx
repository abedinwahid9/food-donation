const HomeCard = () => {
  return (
    <div>
      <div className="card card-compact  bg-[#0052FF26] ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="p-5">
          <div className="inline-flex mb-2">
            <h2 className="text-[#0052FF] font-medium px-3 py-1 bg-[#0052ff33] rounded">
              Health
            </h2>
          </div>
          <p className="font-semibold text-xl text-[#0052FF]">
            Clean water for children
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
