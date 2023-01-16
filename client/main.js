/* global gsock */

//* 주접생성기 만들기 

//^ 모듈파일 경로 잘 확인하기! 
import { 
  clearContents, 
  getInputValue, 
  getNode, 
  getRandom, 
  insertLast, 
  typeError, 
  isNumericString, 
  showAlert, 
  copy, 
  removeClass,
  addClass, } from './lib/index.js';

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
const resultArea = getNode('.result')


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
    showAlert('.alert-error', '잘못된 정보입니다.', 2000);
    //^ 후에 실행이 되기 때문에 리턴을 입력!
    
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    // addClass(resultArea,'shake');
    // setTimeout(()=>{
    //   removeClass(resultArea,'shake');
    // }, 500)
    return
  }

  //^ 숫자만 있는 name은 알림창을 뛰우고, 진행 X
  if(isNumericString(name)){
    console.log('제대로된 이름을 입력해주세요')
    showAlert('.alert-error', '정확한 이름을 입력해주세요.', 2000);
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

//^ 클릭하면 클립보드에 복사를 해주는 장치
function clickCopyHandler(){
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text); 모듈함수로 따로 뺌..
  copy(text).then(()=>{
    //* 프라미스와 then의 구문!!!
    //* 프라미스를 쓰는 이유는? 성공했을 경우에 아래 구문을 써주게 하기 위해!
    showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000)
  })
}


submit.addEventListener('click',clickSubmitHandler)
resultArea.addEventListener('click',clickCopyHandler)






