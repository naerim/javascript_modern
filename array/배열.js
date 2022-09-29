const arr = ["apple", "banana", "orange"];

// Array.of : 전달된 인수를 요소로 갖는 배열
Array.of(1); // [1]
Array.of(1, 2, 3); // [1,2,3]
Array.of("string"); // ['string']

// Array.from : 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환
Array.from({ length: 2, 0: "a", 1: "b" }); // ['a','b']
Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']

// Array.push
const arr1 = [1];
arr1.push(2); // [1,2]

const arr2 = arr1.concat(3); // 새로운 배열 생성하여 반환
console.log(arr1); // [1,2]
console.log(arr2); // [1,2,3]

// Array.isArray
Array.isArray([]); // true
Array.isArray({}); // false
Array.isArray("array"); // false

// Array.prototype.indexOf
const foods = ["apple", "banana", "orange"];
if (foods.indexOf("orange") === -1) {
  foods.push("orange");
}
console.log(foods); // ["apple", "banana", "orange"]
// indexof 대신에 includes 사용하면 가독성이 더 좋음

// Array.prototype.includes
if (foods.includes("orange")) {
  foods.push("orange");
}
console.log(foods); // ["apple", "banana", "orange"]
