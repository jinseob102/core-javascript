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

export function disabledElement(node){
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = true;
}


export function enabledElement(node){
  if(!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = false;
}

export function visibleElement(node){
  if(!isElement(node)) {
    typeError('visiableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }  
  node.hidden = false;
}

export function invisibleElement(node){
  if(!isElement(node)) {
    typeError('invisiableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }  
  node.hidden = true;
}









