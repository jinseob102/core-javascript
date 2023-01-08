/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector('.first')

// let span = document.querySelectorAll('span')

// let first = span[0];
// let second = span[1];

// console.log(span)

// //^ 위에꺼를 아래 축약문으로 바꿀 수 있다.
// let [first,second] = document.querySelectorAll('span');

// console.log(second);



// let first = document.querySelector('.first');

let [first,second] = document.querySelectorAll('span');


// console.log(second);

console.log(getNode('.first').matches('.first'));
console.log(getNode('h1').contains(getNode('.first')))
//* 조건문에 굉장히 많이 쓴다!



/* 문서 대상 확인 */
// - matches
// - contains