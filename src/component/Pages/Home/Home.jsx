import { useLoaderData } from "react-router-dom";
import HomeCard from "../../HomeCard/HomeCard";

const Home = () => {
  const donateDatas = useLoaderData().donations;

  return (
    <div className="py-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {donateDatas.map((donateData) => {
        return <HomeCard key={donateData.id} donateData={donateData} />;
      })}
    </div>
  );
};

export default Home;
