

import { 
  xhrData,
  insertLast,
  xhrPromise,
  seob,
  delayP
 } from "./lib/index.js";



 async function render(){

  await delayP(2000);
  let response = await seob.get('https://jsonplaceholder.typicode.com/users/1')



  console.log(response.data);
}


render()




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


