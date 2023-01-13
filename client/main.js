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

  //* 결과값 중복표시 되지 않으려고 하는 것!
  clearContent('.result')

  //* 결과값 보여주는 것
  insertLast('.result',total)
}


//^ 숫자가 변경되면 실시간으로 결과값이 반영되는 기능
function inputHandler(){
  let firstValue = +getInputValue(firstInput); 
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue)

  //* 결과값 중복표시 되지 않으려고 하는 것!
  clearContent('.result')

  //* 결과값 보여주는 것
  insertLast('.result',total)
}


// done.addEventListener('click',handler) //나중엔 필요없는 부분

firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)