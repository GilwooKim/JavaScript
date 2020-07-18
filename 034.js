//함수이해하기
var greeting_expression = function (name) {
    console.log('Hi ' + name);
} //함수 표현식으로 함수를 만드는 것, 함수를 정의하면서 동시에 변수 greeting_expression에 바로 할당
//greeting_expression 변수에 함수 리터럴을 바로 할당

function greeting_declaration(name) {
    console.log('Hi ' + name);
} //일반적인 다른 개발 언어와 비슷한 함수선언방식

greeting_expression('Chloe');
greeting_declaration('Choi');