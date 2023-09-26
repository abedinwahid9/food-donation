/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ donateData }) => {
  const { card_bg, category, category_bg, id, picture, title, title_color } =
    donateData;

  return (
    <Link to={`/${id}`}>
      <div className={`h-full card card-compact  bg-[${card_bg}] `}>
        <figure className="h-3/5">
          <img className="w-full h-full " src={picture} alt="Shoes" />
        </figure>
        <div className="p-5 h-2/5">
          <div className="inline-flex mb-2">
            <h2
              className={`text-[${title_color}] font-medium px-3 py-1 bg-[${category_bg}] rounded`}
            >
              {category}
            </h2>
          </div>
          <p className={`font-semibold text-xl text-[${title_color}]`}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
