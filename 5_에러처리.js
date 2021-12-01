// 비동기 함수의 콜백 함수를 호출한 것은 비동기 함수가 아니기 때문에 try catch로 에러 잡을 수 없음
try {
    setTimeout(() => {throw new Error('err');}, 1000);
} catch (e) {
    // 에러 캐치 못함
    console.error(e);
}

// try catch문
const fetch = require('node-fetch');

const foo = async () => {
    try {
        const wrongUrl = 'https://wrong.url';
        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

foo();

// async 함수 호출 후 Promise.prototype.catch 후속 처리 메서드를 사용해 에러 캐치
const foo1 = async () => {
    const wrongUrl = 'https://wrong.url';
    const response = await fetch(wrongUrl);
    const data = await response.json();
    return data;
};

foo1()
    .then(console.log)
    .catch(console.error)
