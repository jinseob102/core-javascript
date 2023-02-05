


import {
  insertLast,
  seob,
  delayP,
  createUserCard,
  getNode,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  changeColor,
  attr,
} from "./lib/index.js";
import { getNode as $, loadStorage, saveStorage } from "./lib/index.js";

// rendingUserList
// ajax get user List
// 유저 카드 생성
// 생성된 카드로 랜더링
// 미션: renderUserCard 함수를 만들기 -> createUserCard를 던져서 -> 렌더링 되도록

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);
    getNode(".loadingSpinner").remove();







const textField = $('#textField')
const deleteButton = $('input[value="삭제"]');


    // todo 왜 여기에 서버주소를 넣는것인가? 알아보자!!
    let response = await seob.get("http://localhost:3000/users");

    // console.log(reponse);

    let userData = response.data;

    //^ userData의 모든 배열을 forEach로 나열해서 렌더링 바로 시키기
    //! 중요하고 재밋군?
    userData.forEach((data) => {
      // console.log(data);
      //^ renderUserCard라는 모듈함수 만들어서 사용 한 것
      renderUserCard(userCardContainer, data);
    });
loadStorage('area').then((res)=>{
  textField.value = res;
})

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    // console.log(err);
    //^ 주소가 틀리거나 통신이 안되면 표시할 정보가 없다는 표시하기
    renderEmptyCard(userCardContainer);
  }

  //^ 배열이 들어왔을 땐 어떻게 렌더링 할까?
  // 배열 받음 -> 배열을 객체화 해야겠지? -> 그러다음에 아이디를 분류해서 렌더링!
}

rendingUserList();

// 삭제버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.

function handler(e) {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  seob.delete(`http://localhost:3000/users/${id}`).then(() => {
    //^ 다시 바로 새롭게 순서를 맞춰야하기 때문에, 내용을 모두 지운다
    userCardContainer.innerHTML = "";

    //^ 다 삭제하고 목록을 다시 로드함
    rendingUserList();
  });

  // console.log(id);
}

userCardContainer.addEventListener("click", handler);





//^ 인풋 이벤트는 값이 추가되는 걸 감지, 새로고침하면 날아감
textField.addEventListener('input',inputHandler)
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
//* ------------------계산기 만들기------------------------

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");


//^ ----------------함수(재활용) -------------------------

//^ value를 가져오는 함수(간단하지만 연습겸)
function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}

//^ 더하는 것도 함수로 생성(연습겸)
const sum = (valueA, valueB) => valueA + valueB;

//^ 글자 초기화시켜주는
function clearContent(node){
  if(typeof node ==='string') node = getNode(node);
  node.textContent = '';
}

//^ ---------------------------------------------------


//^ 기본 계산기 기능
function handler(e) {
  e.preventDefault();

  //대부분 문자열이다 그래서 숫자형으로 변경!
  let firstValue = +getInputValue(firstInput); 
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue)

  //* 클릭하면 잘되는지 확인용(핸들러 안에서 해야됨)
  // console.log(firstValue, secondValue); 
  console.log(total);

  //* 결과값 중복표시 되지 않으려고 하는 것!(미리 만듬)
  clearContent('.result')
}

import { 
  diceAnimation, 
  disabledElement, 
  enabledElement, 
  getNode, 
  getNodes, 
  visibleElement, 
  invisibleElement, 
  insertLast, 
  attr, 
  clearContents } from './lib/index.js';



//^ 정확하게는 유사배열로 반환(배열의 구조분해 할당!!)
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode(".recordListWrapper")




//^ 위처럼 합쳐서 선언할 수 있음!
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetdButton = getNode('.buttonGroup > button:nth-child(3)');



let count = 0;
let total = 0;



//* 주사위값 기록하기 모두!-------------------------------------------
function renderRecordListItem(){
  
  let diceValue = Number(attr('#cube', 'data-dice'));
  let template = /* html */`
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>        
      <td>${total = total + diceValue}</td>
    </tr>`
    
    
    //* 윗부분 아예 모르겠다...음 생각보다 쉬운데 한번 더 봐야겠는데?

  insertLast('.recordListWrapper tbody',template)
  
  //^ 값이 입력되면 스크롤 가장 아래쪽으로 내려가게 하는 것
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight

}

recordButton.addEventListener('click',renderRecordListItem)


//* -------------------이벤트 영역 ------------------------------------------------


//^ 변수 보호를 위해 클로저로 만들 것 + IIEF패턴
const handlerRollingDice = (() => {
    
    let stopAnimation;
    let isRolling = false;
    
    //^ 클로저를 위해서 리턴을 함수의 함수로 만들어 넣어줌
    return () => {
  
    //^ 이 애니메이션은 범쌤 작업하심
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation,100)

      //^ 기록버튼 비활 or 활성화 왔다갔다리
      disabledElement(recordButton);
      disabledElement(resetButton);


    }else{
      clearInterval(stopAnimation)
      enabledElement(recordButton);
      enabledElement(resetButton);
      
    }  
    
    //^ 이벤트가 계속 발생할 수 있게 하는 것
    isRolling = !isRolling;
    }
  
})()



const handlerRecord = () => {

  //^ 기록 영역을 보이게 하는 것
  visibleElement(recordListWrapper)

}


const handlerReset = () => {

  invisibleElement(recordListWrapper);
  //^ 값을 완전히 초기화 시키는 부분
  clearContents('.recordListWrapper tbody');
  count = 0;
  total = 0;
}



//* handlerRollingDice()의 ()를 쓰는 이유는 return을 실행이 될 수 있다. 클로져일땐 두번 실행해야댐!!!)
//일반용
// rollingDiceButton.addEventListener('click',handlerRollingDice())

// IIEF패턴용
rollingDiceButton.addEventListener('click',handlerRollingDice) // 주사위 굴리기
recordButton.addEventListener('click',handlerRecord) // 기록
resetButton.addEventListener('click',handlerReset) // 초기화





// done.addEventListener('click',handler) //   밑에 두개 때문에 나중엔 필요없는 부분!

//   await delayP(2000);
//   let response = await seob.get('https://jsonplaceholder.typicode.com/users/1')

//   console.log(response.data);
// }

// render()

// //* 모듈함수 쓰는것
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (res)=>{
//     console.log(res);
//     insertLast('body',JSON.stringify(res))
//   },
//   (err)=>{
//     insertLast('body','데이터 로딩에 실패')
//   },
// )

firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)