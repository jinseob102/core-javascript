import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";


//* JSDOCK?
//* 바로 밑에 있는 함수를 설명하는 주석!
//* 실행할때 나온다!!
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return set disabled
 */


//* 요소를 사용안되게 하는 것
export function disabledElement(node){
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = true;
}

//* 요소를 사용되게 하는 것
export function enabledElement(node){
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = false;
}

//* 요소를 보이게 하는 것
export function visibleElement(node){
  if(!isElement(node)) {
    typeError('visiableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }  
  node.hidden = false;
}

//* 요소를 안보이게 하는 것
export function invisibleElement(node){
  if(!isElement(node)) {
    typeError('invisiableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }  
  node.hidden = true;
}









