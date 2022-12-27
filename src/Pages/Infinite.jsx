import { useInfiniteScroll } from "ahooks";
import { Button, Spin } from "antd";
import { getInfiniteData } from "../api";

export default () => {
  const { data, loading, loadMore, loadingMore } =
    useInfiniteScroll(getInfiniteData);

  return (
    <Spin spinning={loading}>
      <div>
        {data?.list?.map((v) => (
          <div>{v.name}</div>
        ))}
      </div>
      <Button onClick={loadMore} loading={loadingMore}>
        loading more
      </Button>
    </Spin>
  );
};
