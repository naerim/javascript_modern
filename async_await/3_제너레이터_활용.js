// 제너레이터를 사용해서 비동기처리를 동기 처리처럼 동작하도록 구현한 것
// -> 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 하는 async await 도입!
// node-fetch : node환경에서 window.fetch 함수를 사용하기 위한 패키지
const fetch = require('node-fetch');

// 제너레이터 실행기
const async = generatorFunc => {s
    const generator = generatorFunc(ㄴ);s
    const onResolved = arg => {
        const result = generator.next(arg);ㄴ
        return result.done
        ? result.value
        : result.value.then(res => onResolved(res));
    };
    return onResolved;
}

(async(function* fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = yield fetch(url);
    const todo = yield response.json();
    console.log(todo);
})()); 