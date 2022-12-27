var Mock = require("mockjs");

const { Random } = Mock;

Mock.setup({
  timeout: "300-800",
});

Mock.mock(/table.json/, function (options) {
  const list = new Array(15).fill(1).map((v, i) => ({
    key: i,
    name: Random.cname(),
    age: Random.natural(18, 60),
    address: Random.county(true),
  }));

  console.log("options", options);

  return {
    ...options,
    body: {
      total: 15,
      list,
    },
  };
});

Mock.mock(/infinite.json/, function (options) {
  const list = new Array(5).fill(1).map((v, i) => ({
    key: i,
    name: Random.cname(),
  }));

  console.log("options", options);

  return {
    ...options,
    body: {
      nextId: 6,
      list,
    },
  };
});

Mock.mock(/\.json/, function (options) {
  console.log("options", options);
  return options;
});
