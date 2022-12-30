/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */





// let dm
// let age = prompt('나이를 입력해주세요');
// if(age >= 14 && age <= 90){
//   dm = '아직 청춘이시네요?'
// }else{
//   dm = '이제 중년이시네요?'
// }

// alert(dm);








let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length ||{thisIsTruthy:true};




let userName = prompt('아이디를 입력하세요');

if(userName?.toLowerCase() === 'admin'){  
  let pw = prompt('비밀번호를 입력하세요', '8자리');
  if(pw?.toLowerCase() === 'themaster'){
    alert('환영합니다');
  }else{
    alert('인증에 실패하였습니다');
  }
}else if(userName === "" || userName === null){
  alert('취소되었습니다.');
}else{
  alert('인증되지 않는 사용자 입니다.')
}