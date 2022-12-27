import axios from "axios";

export const getTableData = async (params) => {
  const data = await axios.get("./table.json");
  console.log("params", params, data.data);
  return data.data.body;
};
