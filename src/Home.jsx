import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default () => {
  return (
    <div>
      home
      <div>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};
