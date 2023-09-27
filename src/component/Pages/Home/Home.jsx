import { useLoaderData } from "react-router-dom";
import HomeCard from "../../HomeCard/HomeCard";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../../../App";

const Home = () => {
  const donationDatas = useLoaderData().donations;

  const [donateDatas, setdonateDatas] = useState(donationDatas);

  const { searchData } = useContext(searchContext);

  useEffect(() => {
    if (searchData !== "") {
      // Filter the donation data based on the searchData
      const filterData = donationDatas.filter(
        (data) => data.category.toLowerCase() === searchData
      );

      setdonateDatas(filterData);
    } else {
      setdonateDatas(donationDatas);
    }
  }, [searchData, donationDatas]);

  return (
    <div className="py-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {donateDatas.map((donateData) => {
        return <HomeCard key={donateData.id} donateData={donateData} />;
      })}
    </div>
  );
};

export default Home;
