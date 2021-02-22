function myFunction(p1, p2) {
    return p1 * p2; // p1, p2 곱연산의 결과를 반환한다.
}

// ES6 문법 (코딩 테스트에 자주 나옵니다.)
/*
const hello = () => {
    console.log("hello");
}
*/

// #work01 사칙연산을 하는 + - / * 기능을 작성하세요. [function name: plus , minus, div, multi]
function plus(p1, p2) {
    return p1 + p2;
}

function minus(p1, p2) {
    return (p1 > p2) ? (p1 - p2) : (p2 - p1);
}

function div(p1, p2) {
    if (p2 == 0) return "can't be divided by zero";
    return p1 / p2;
}

function multi(p1, p2) {
    return p1 * p2;
}