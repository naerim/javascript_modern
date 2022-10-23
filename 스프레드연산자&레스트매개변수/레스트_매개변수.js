const runners = ["Tom", "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;
console.log(...losers);
// Mark Luke

// 레스트는 여러 원소를 하나의 원소로 압축한다.
