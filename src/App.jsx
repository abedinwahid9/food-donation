import { Outlet } from "react-router-dom";

import Header from "./component/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className=" md:pt-16 pt-4 px-3 md:px-24">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
