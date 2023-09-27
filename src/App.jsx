/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./component/Header/Header";

export const searchContext = createContext("");

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <searchContext.Provider value={{ searchData, setSearchData }}>
      <div className="container mx-auto">
        <Header />
        <div className=" md:pt-16 pt-4 px-3 md:px-24">
          <Outlet />
        </div>
      </div>
    </searchContext.Provider>
  );
}

export default App;
