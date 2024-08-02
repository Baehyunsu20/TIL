//JSON이란
// 자바스트립트 객체를 문자열로 나타낸 것 
// JSON 객체를 사용
//JSON.stringify() ; 객체-> 문자열
//JSON.parse() : 문자열 -> 객체


var luna = {

    name : "Luna",
    age : 4
}

var lunaStr = JSON.stringify(luna);

//자바와의 차이점
// 자바스트립트에서는 : 싱글 쿼테이션도 문자열을 표시하는데 사용

var Daisy = {
    name : "daisy",
    age : '3'
}
var daisyStr = JSON.stringify(Daisy);

/**
 * luna
{name: 'Luna', age: 4}
 * lunaStr
'{"name":"Luna","age":4}'

daisyStr
'{"name":"daisy","age":"3"}'

//속성명은 문자열로 표현 -> 
//숫자는 씽따옴표 없음 -> 문자열로 받으면 숫자로 쌍따옴표 생김.

 */