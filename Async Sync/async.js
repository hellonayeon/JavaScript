
var fs = require('fs');

console.log("첫 번째 기능입니다.");
fs.readFile('test.txt', 'utf8', function(err, result) {
    if(err) {
        console.error(err);
        throw err;
    }
    else {
        console.error("두 번째 기능인데 파일을 읽어오느라 시간이 조금 걸려요.");
        console.log(result);
        //console.log("마지막 기능입니다.") //순차적 처리를 원할 경우 콜백 함수에서 다음 기능을 호출
    }
});
console.log("마지막 기능입니다.");


/*
//#Example
function aFunc() {
    setTimeout(function () {
        console.log('a');
    },1700)
}
function bFunc() {
    setTimeout(function () {
        console.log('b');
    },1000)
}
function cFunc() {
    setTimeout(function () {
        console.log('c');
    },500)
}

aFunc(); // 3
bFunc(); // 2
cFunc(); // 1

*/
