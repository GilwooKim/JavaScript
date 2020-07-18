//argument 이해하기

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a', 'b');


// 결과

// false
// 6
// [ 'a', 'b' ]
// 1

// c:\Users\Code guy\Desktop\코드\036.js:19
//     console.log(arguments.indexOf('b'));
//                           ^

// TypeError: arguments.indexOf is not a function


결과에 대한 해석

자바스크립트상에서 함수는 매개변수를 가진다.여기서 매개변수와 같이 사용되는 것이 전달인자(arguments) 인데, 자바스크립트는 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않는다.
그래서 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달할 수 있는데, 매개변수 외에 함수에서만 사용 가능한 특별한 객체를 제공한다
이 특별한 객체가 바로 arguments 객체이다.
sum 함수를 정이하면서 내부에 arguments 객체를 통해 전달된 인자의 합을 반환하게 된다.arguments 객체는 배열과 유사하게 인덱스를 토해 접근할 수 있다.하지만 length속성외에는 배여릐 어떠한 속성과 메소드를 가지고 있지 않는다.