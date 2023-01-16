

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
    
    
    //* 이부분 아예 모르겠다...음 생각보다 쉬운데 한번 더 봐야겠는데?

  insertLast('.recordListWrapper tbody',template)
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
  
    //^ 이 애니메이션은 범쌤이 미리 작업
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
  
    isRolling = !isRolling;
    }
  
})()


const handlerRecord = () => {

  visibleElement(recordListWrapper)

}


const handlerReset = () => {

  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
  count = 0;
  total = 0;
}


//일반용
//* handlerRollingDice()의 ()를 쓰는 이유는 return을 실행이 될 수 있다. 두번 실행해야댐!!!)
// rollingDiceButton.addEventListener('click',handlerRollingDice())

// IIEF패턴용
rollingDiceButton.addEventListener('click',handlerRollingDice)
recordButton.addEventListener('click',handlerRecord)
resetButton.addEventListener('click',handlerReset)




