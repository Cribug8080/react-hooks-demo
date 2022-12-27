import axios from "axios";

export const getTableData = async (params) => {
  const data = await axios.get("./table.json");
  return data.data.body;
};

export const getInfiniteData = async (params) => {
  const data = await axios.get("./infinite.json");
  return data.data.body;
};
