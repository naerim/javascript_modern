/** 배열의 결합 */
const veggie = ["tomate", "cucumber"];
const meat = ["pork", "beaf"];

const menu = [...veggie, "pasta", ...meat];
console.log(menu); // ["tomate", "cucumber", "pasta", "pork", "beaf"]

/** 배열의 복사 */
const veggie1 = ["tomate", "cucumber"];
const newVeggie = [...veggie1];
veggie1.push("peas");
console.log(veggie1);
// ["tomate", "cucumber", "peas"]
console.log(newVeggie);
// ["tomate", "cucumber"]

/** 함수의 스프레드 연산자 */
function doStuff(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
doStuff(...args); // 3
console.log(args); // [0,1,2]
// 저장된 인수보다 더 많은 값을 제공하면 포함안시킴
