/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined, null
console.log(String(undefined));

// boolean


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// null

// boolean
let cute = true;
console.log(cute * 1);

// string
let num = '    123'
console.log(num * 1);

// numeric string
let width = '320px';

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

const date = new Date()