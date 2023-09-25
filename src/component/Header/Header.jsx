import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar.jsx/Searchbar";
import "./header.css";

const Header = () => {
  const location = useLocation();

  const isTrue = location.pathname === "/" ? true : false;

  return (
    <div className={isTrue ? "header" : ""}>
      <div className="bg-[#ffffffe5] w-full h-full md:pt-16 pt-4 px-3 md:px-24">
        <Navbar />
        {isTrue ? <Searchbar /> : ""}
      </div>
    </div>
  );
};

export default Header;
