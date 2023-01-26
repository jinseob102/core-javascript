//* getNode를 쓰는 이유는?
//* 문자 타입인 것을 확인 하고, CSS선택자로 바꿔주기 위해서!
export function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }

  // if(!isString(node)) typeError('에러가 발생했습니다.');

  return document.querySelector(node);
}

//* getNodes를 쓰는 이유는?
//* 문자 타입인 것을 확인 하고, CSS선택자로 바꿔주기 위해서!
function getNodes(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }

  return document.querySelectorAll(node);
}
