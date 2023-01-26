// 📂 typeError.js
export function typeError(message) {
  throw new TypeError(message);
}

function refError(message) {
  throw new ReferenceError(message);
}

//* 신택스에러는 전체적인 동작이 멈춘다. 수정해도 진행이 안됨.
function syntaxError(message) {
  throw new SyntaxError(message);
}

// 📂 typeError.js
export function typeError(message) {
  throw new TypeError(message);
}
