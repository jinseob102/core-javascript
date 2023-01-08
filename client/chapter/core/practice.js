// //& 함수 - 첫번째 문제
// function check(age) {
//   if (age > 18) {
//     return true;
//   }else {
//     return confirm('보호자 동의?');
//   }
// }
// //& 함수 - 두번째 문제
// function check(age) {
//     return (age > 18) ? true : confirm('보호자 동의?');
// //* return (age > 18) || confirm('보호자 동의?);
// }
// //& 함수 - 세번째 문제
// function min(a, b){
//   if(a > b){
//     return b;
//   }else {
//     return a;
//   }
// }
// function min(a, b) {
//   return a > b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
// //& 함수 - 네번째 문제
// function pow (x, n) {
//   let result = x;

//   for(let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert(pow(10, 100));
//? 제곱하기 범샘식!!!
//& let pow = (x, n) => Array(n)).fill(null).reduce(i => i * x, 1)


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "동의하십니까?",
//   function() { alert("동의하셨습니다."); },
//   function() { alert("취소 버튼을 누르셨습니다.");  }  
// )

//& 범샘이 내준 문제
// let repeat = (text, repeatCount) => {
//     let result = '';
//     for(let i = 0; i < repeatCount; i++){
//       result += text;
//     }
//     return result;
//   };

//^ 내준문제 범샘 풀이법(reduce 활용)
  // let repeatPow = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '' )

  // console.log(repeatPow('안뇽🦈',200));


  //& 28일차(수) 객체 마지막 문제
  // let menu = {
  //   width: 200,
  //   height: 300,
  //   title: "My menu"
  // };

  // function multiplyNumeric(obj) {
  //   for (let key in obj) {
  //     if (typeof obj[key] == 'number') {
  //       obj[key] *= 2;
  //     }
  //   }
  // }

  // multiplyNumeric(menu);
  // console.log(menu);

  //& 참조에 의한 객체 복사 1
  
  //& 참조에 의한 객체 복사 2
  
  //& 참조에 의한 객체 복사 3
  
  //& 참조에 의한 객체 복사 4


  // 프로퍼티의 순서!
  // 1. 정수 프로퍼티 -> 작은 / 큰 순서부터 정렬
  // 2. 정수가 아닌 프로퍼티는 -> _________순서로 정렬될까요?


  


