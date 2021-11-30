// await은 async 내부에서 사용해야 한다.

// async 함수 선언문
async function foo(n) {return n;}
foo(1).then(v => console.log(v)); // 1

// async 함수 표현식
const bar = async function (n) {return n;};
bar(2).then(v => console.log(v)); // 2

// async 화살표 함수
const baz = async n => n;
baz(3).then(v => console.log(v)); // 3

// async 메서드
const obj = {
    async foo(n) {return n;}
};
obj.foo(4).then(v => console.log(v)); // 4

// async 클래스 메서드
class MyClass {
    async bar(n) {return n;}
}
const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v)); // 5

// 서로 연관없이 개별적으로 수행되는 비동기처리일 경우
async function foo1() {
    const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    ]);
    console.log(res); // [1, 2, 3]
}
foo1();

// 앞선 비동기 처리의 결과를 가지고 다음 비동기 처리를 수행해야할 경우
// 비동기 처리 순서가 보장되어야 함 -> await을 모두 써서 순차적으로 처리해야 함!
async function bar1(n) {
    const a = await new Promise(resolve => setTimeout(() => resolve(n), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(a + 1), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(b + 1), 1000));
    console.log([a, b, c]); // [1, 2, 3]
}
bar1(1);