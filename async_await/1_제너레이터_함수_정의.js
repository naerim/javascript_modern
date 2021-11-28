// 제너레이터
// 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수

// 제너레이터 함수 선언문
function* genDecFunc() {
    yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1;
}

// 제너레이터 메서드
const obj = {
    * genObjMethod() {
        yield 1;
    }
};

// 제너레이터 클래스 메서드
class MyClass {
    * gebClsMethod() {
        yield 1;
    }
}

// 제너레이터 함수는 화살표 함수로 정의할 수 없음
// new 연산자와 함께 생성자 함수로 호출할 수도 없음