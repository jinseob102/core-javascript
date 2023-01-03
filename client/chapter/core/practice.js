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

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다.");  }  
)