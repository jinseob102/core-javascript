/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello"
let nickname = '후루루삥뽕울라훌라뿅'
let message3 = `${message1}!, 안녕 내 이름은 ${nickname}이야`

console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 8. 고유한 식별자(unique identifier)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
const user = {
	name: 'tiger',
	age: 27
}

// Array

// function
function carpBread(data){
  return `${data} 맛 붕어빵입니다.`
}
console.log(carpBread('팥'));
console.log(carpBread('크림'));
console.log(carpBread('민트'));


// this
