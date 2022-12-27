var Mock = require("mockjs");

const { Random } = Mock;

// var data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   "array|5-10": [
//     {
//       // 属性 id 是一个自增数，起始值为 1，每次增 1
//       "key|+1": 1,
//       "name|+1": new Array(10).fill(1).map(v => Random.cname()),
//       age: Random.natural(18, 60),
//       address: Random.county(true)
//     }
//   ]
// });

Mock.mock(/table.json/, function (options) {
  const list = new Array(15).fill(1).map((v, i) => ({
    key: i,
    name: Random.cname(),
    age: Random.natural(18, 60),
    address: Random.county(true)
  }));

  console.log("options", options);

  return {
    ...options,
    body: {
      total: 15,
      list
    }
  };
});

Mock.mock(/\.json/, function (options) {
  console.log("options", options);
  return options;
});
