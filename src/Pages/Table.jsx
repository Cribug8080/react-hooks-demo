import { Table } from "antd";
import { getTableData } from "../api";
import { useAntdTable } from "ahooks";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address"
  }
];

function MyTable() {
  const { tableProps, search } = useAntdTable(getTableData);
  // console.log("tableProps", tableProps, search);

  return <Table columns={columns} {...tableProps} />;
}

export default MyTable;
