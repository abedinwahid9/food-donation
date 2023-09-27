import { useParams, useLoaderData } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveDonateData,
  getStoredDonateData,
} from "../../Utility/LocalStorage";

const DonationDetails = () => {
  const currentId = useParams();
  const donateDatas = useLoaderData().donations;
  const currentIdNum = parseInt(currentId.id);

  const dataFind = donateDatas.find((data) => data.id === currentIdNum);

  const { picture, title, description, text_button_bg, donate_amount, id } =
    dataFind;

  const handleDonateBtn = () => {
    const checkData = getStoredDonateData().includes(id);

    if (!checkData) {
      toast("Donation successful!");
    } else {
      toast("already Donation done!");
    }

    saveDonateData(parseInt(id));
  };

  return (
    <>
      <div className="lg:h-[650px] md:h-[400px] h-[200px] rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-full flex items-end"
          style={{
            backgroundImage: `url(${picture}`,
          }}
        >
          <div className="bg-[#0b0b0b80] w-full py-7 pl-7">
            <button
              onClick={() => handleDonateBtn(id)}
              className=" md:px-5 md:py-3 px-4 py-2 text-[#fff] font-semibold  rounded"
              style={{ backgroundColor: text_button_bg }}
            >
              Donate ${donate_amount}
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-[#000] font-bold text-5xl">{title}</h2>
        <p className="mt-5 text-secondaryTextColor text-base">{description}</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default DonationDetails;
