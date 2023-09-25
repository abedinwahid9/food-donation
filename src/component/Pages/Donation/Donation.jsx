import DonationCard from "../../DonationCard/DonationCard";

const Donation = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
      <div className="my-10 flex justify-center ">
        <button className="bg-[#009444] py-3 px-6 rounded-lg text-base font-semibold text-[#fff]">
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;
