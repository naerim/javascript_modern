
// node-fetch : node환경에서 window.fetch 함수를 사용하기 위한 패키지
const fetch = require('node-fetch');

// 제너레이터 실행기
const async = generatorFunc => {
    const generator = generatorFunc();
    const onResolved = arg => {
        const result = generator.next(arg);
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