import { useLoaderData } from "react-router-dom";
import PieChart from "../../PieChart/PieChart";

const Statistics = () => {
  const donateData = useLoaderData().donations;

  const dataLength = donateData.length;

  return (
    <div>
      <PieChart dataLength={dataLength} />
      <div className="mb-24 mt-4 flex md:flex-row flex-col gap-12 justify-center items-center">
        <div className="flex items-center gap-5">
          <h2 className="text-lg font-medium">Your Donation</h2>
          <div className="w-24 h-3 rounded bg-[#00C49F] "></div>
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-lg font-medium">Total Donation</h2>
          <div className="w-24 h-3 rounded bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
