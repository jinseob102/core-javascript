//* 주접생성기 만들기 

//^ 모듈파일 경로 잘 확인하기! 
import { clearContents, getInputValue, getNode, getRandom, insertLast, typeError, isNumericString } from './lib/index.js';
import { jujeobData } from "./data/data.js";


//^ 숫자가 포함된 문자열인지, 그냥 숫자만 포함되어 있는지 선별하는 함수--------
//! 유틸함수로 이동!
// function isNumericString(data){
//   data = Number(data);
//   return !isNaN(data)
// }
//^ -----------------------------------------------------------



const submit = getNode('#submit')
const result = getNode('.result')



//^ 콘솔 확인용
console.log(submit);
// console.log(getRandom(5));




function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  
  //^ "빈문자열"이면 타입에러 발생
  if(!name){
    alert('getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.');
    //^ 후에 실행이 되기 때문에 리턴을 입력!
    return
  }

  //^ 숫자만 있는 name은 알림창을 뛰우고, 진행 X
  if(isNumericString(name)){
    console.log('제대로된 이름을 입력해주세요')
    return
  }


  //^ 실행전 인풋 초기화하기
  clearContents(result)

  //todo 렌더링 하기(insertLast) -> 까먹지 말자!!!
  insertLast(result,pick)


  //^ input에 값을 입력하면 콘솔에 입력된다.
  //^ list.length-1은 리스트의 전체의 수를 말한다.
  // console.log(list[getRandom(list.length-1)]);

}


submit.addEventListener('click',clickSubmitHandler)