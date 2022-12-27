import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router";
import router from "./router";
import mock from "./mock";

import "./styles.css";

console.log("router", router);

export default function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}
