import { useLoaderData } from "react-router-dom";
import DonationCard from "../../DonationCard/DonationCard";
import { useEffect, useState } from "react";
import { getStoredDonateData } from "../../Utility/LocalStorage";

const Donation = () => {
  const [donationDatas, setDonationDatas] = useState([]);
  const [dataLength, setDatalength] = useState(4);

  const donateDatas = useLoaderData().donations;

  const handleSeeAll = () => {
    setDatalength(donationDatas.length);
  };

  useEffect(() => {
    const getData = getStoredDonateData();

    if (donateDatas.length > 0) {
      const giveDonation = donateDatas.filter((data) =>
        getData.includes(data.id)
      );
      setDonationDatas(giveDonation);
    }
  }, []);

  return (
    <div className="mb-16">
      {donationDatas.length === 0 ? (
        <div className="text-center my-4">No donation data found.</div>
      ) : (
        <>
          <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-5">
            {donationDatas.slice(0, dataLength).map((donationData) => (
              <DonationCard key={donationData.id} donationData={donationData} />
            ))}
          </div>

          {donationDatas.length > 4 && dataLength !== donationDatas.length && (
            <div className="my-10 flex justify-center">
              <button
                onClick={handleSeeAll}
                className="bg-[#009444] py-3 px-6 rounded-lg text-base font-semibold text-[#fff]"
              >
                See All
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Donation;
