import { Link } from "react-router-dom";

const DonationCard = () => {
  return (
    <div>
      <div className="flex bg-base-100 bg-[#0052FF26] rounded-lg  overflow-hidden">
        <div className="w-2/5">
          <img
            className="h-full object-fit"
            src="https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Album"
          />
        </div>
        <div className="p-5">
          <div className="inline-flex mb-2">
            <h2 className="text-[#0052FF] font-medium px-3 py-1 bg-[#0052ff33] rounded">
              Health
            </h2>
          </div>
          <p className="font-semibold text-xl text-[#000]">
            Clean water for children
          </p>
          <p className="text-[#0052FF] font-semibold text-base mt-2 mb-4">
            $290.00
          </p>
          <Link to="/:id">
            <button className="bg-[#0052FF] py-2 px-4 text-base text-[#fff] font-semibold rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
