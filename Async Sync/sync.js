var fs = require('fs');

console.log('A');

var result = fs.readFileSync('test.txt', 'utf-8'); // 파일의 로딩이 끝날때 까지 대기(로딩)를 건다.

console.log(result);

console.log('C');