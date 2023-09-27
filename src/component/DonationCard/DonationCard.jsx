/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({ donationData }) => {
  const {
    picture,
    category,
    donate_amount,
    card_bg,
    title_color,
    title,
    category_bg,
    id,
  } = donationData;

  return (
    <div>
      <div
        className={"flex bg-base-100  rounded-lg  overflow-hidden"}
        style={{ backgroundColor: card_bg }}
      >
        <div className="w-2/5">
          <img className="h-full object-fit" src={picture} alt="Album" />
        </div>
        <div className="p-5">
          <div className="inline-flex mb-2 ">
            <h2
              className=" font-medium  px-3 py-1 rounded "
              style={{ color: title_color, backgroundColor: category_bg }}
            >
              {category}
            </h2>
          </div>
          <p className="font-semibold md:text-xl text-base  text-[#000]">
            {title}
          </p>
          <p
            className=" font-semibold text-base mt-2 mb-4"
            style={{ color: title_color }}
          >
            ${donate_amount}
          </p>
          <Link to={`/${id}`}>
            <button
              className="py-2 px-4 text-base font-semibold rounded"
              style={{ backgroundColor: title_color, color: "#fff" }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
