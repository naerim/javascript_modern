// 제너레이터 함수 호출하면 제너레이터 객체를 생성해 반환
// 일반 함수는 함수 코드 블록을 실행

// 제너레이터 함수
function* genFunc() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.error(e);
    }
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const generator = genFunc();

// 처음 next 메서드 호출하면 첫 번째 yield 표현식가지 실행되고 일시 중지됨
// next 메서드는 이터레이터 리절트 객체 {value, done}을 반환함
// value에는 첫 번째 yield 표현식에서 yield된 값 1이 할당됨
// done에는 제너레이터 함수가 긑까지 실행되었는지를 나타내는 false가 할당됨
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
// 남은 yield 표현식이 없으므로 제너레이터 함수의 마지막까지 실행됨
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.return('End!')); // {value: "End!", done: true}


// 제너레이터 객체의 next 메서드에 전달한 인수는 제너레이터 함수의 yield 표현식을 할당받는 변수에 할당됨
function* genFunc1() {
    const x = yield 1;
    const y = yield (x+10);
    // 제너레이터에서 return은 종료의 의미로만 사용함
    return x + y;
}

const generator1 = genFunc1(0);

// 처음 호출하는 next 메서드에 인수를 전달하면 무시됨
let res = generator1.next();
console.log(res); // {value:1, done: false}

// 10이 x 변수에 할당됨
//두 번째 yield된 값 20이 할당됨
res = generator1.next(10);
console.log(res); // {value:20, done: false}

// 20이 y 변수에 할당됨
res = generator1.next(20);
console.log(res); // {value:30, done: true}