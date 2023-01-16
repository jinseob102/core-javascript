

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




