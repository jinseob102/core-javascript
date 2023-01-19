


import { getNode as $, loadStorage, saveStorage } from "./lib/index.js";








const textField = $('#textField')
const deleteButton = $('input[value="삭제"]');



loadStorage('area').then((res)=>{
  textField.value = res;
})


function inputHandler(){
    SVGAElement.Storage('area')
}






//^ 인풋 이벤트는 값이 추가되는 걸 감지, 새로고침하면 날아감
textField.addEventListener('input',inputHandler)