import { NavLink, useLocation, useRouteLoaderData } from "react-router-dom";
import router from "./router";

export default ({ routes }) => {
  return (
    <>
      {router.routes?.map((v) => {
        if (v.children) {
          return v.children.map((v2) => (
            <NavLink key={v2.path} to={v2.path} style={{ margin: "10px" }}>
              {v2.path}
            </NavLink>
          ));
        }
      })}
    </>
  );
};
