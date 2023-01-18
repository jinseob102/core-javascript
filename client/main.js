

import { 
  xhrData, 
  insertLast,
  xhrPromise 
} from "./lib/index.js";



xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body,JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
})




//* 모듈함수 쓰는것
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (res)=>{
//     console.log(res);
//     insertLast('body',JSON.stringify(res))
//   },
//   (err)=>{
//     insertLast('body','데이터 로딩에 실패')
//   },
// )


