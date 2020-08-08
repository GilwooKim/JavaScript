//표준내장 객체 이해하기

const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2020-08-20'));
console.log(JSON.parse('{}'));

const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 == '자바스크립트 200제');
console.log(str2 == new String('자바스크립트 200재'));

console.log(str1.valueOf());
console.log(str2.valueOf());
