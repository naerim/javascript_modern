// 제너레이터 함수: 원하는 만큼 코드 실행을 시작하거나 중지할 수 있는 함수
function* fruitList() {
  yield "Banana";
  yield "Apple";
  yield "Orange";
}

const fruits = fruitList();

// 제너레이터
fruits.next(); // {value: 'Banana', done: false}
fruits.next(); // {value: 'Apple', done: false}
fruits.next(); // {value: 'Orange', done: false}
fruits.next(); // {value: undefined, done: true}

/** .return() 사용해서 제너레이터 종료하기 */
fruits.return();
// {value: undefined, done: true}

/** .throw()로 오류잡기 */
function* gen() {
  try {
    yield "Trying...";
    yield "Trying harder...";
    yield "Trying even harder...";
  } catch (err) {
    console.log("Error: ", err);
  }
}

const myGenerator = gen();
myGenerator.next(); // {value: "Trying...", done: false}
myGenerator.next(); // {value: "Trying harder...", done: false}
myGenerator.throw("ooops"); // {value: unfined, done: true}
