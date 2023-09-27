import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      className=" flex flex-col items-center mt-32 
    "
    >
      <h2>Oops error!</h2>
      <p>Here is helpful link:</p>
      <NavLink rel="stylesheet" href="/home">
        home
      </NavLink>
    </div>
  );
};

export default Error;
