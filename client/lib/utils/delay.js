

import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from './typeOf.js';


const first = getNode('.first');








// 초기값
const defaultOptions = {
  shouldRefect: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}


//^ 딜레이 + 프라미스 콜라보 사용하기
export function delayP(options = {}){

  //^ 얕은 복사한것(기본값 변형이 없도록 하는 것) => 기본을 깐다
  let config = {...defaultOptions};



  if(isNumber(options)){
    config.timeout = options;
  }


  if(isObject(options)){
  //^ 객체 합성 mixin => 디폴트 값이랑 새로운 값이랑 대체를 해야한다.
  config = {...config, ...options};
  }
  const {shouldReject,data,errorMessage,timeout} = config;

  
  return new Promise((resolve, reject) => {

    setTimeout(()=> {
      if(!shouldReject){
        resolve('성공');
      }else {
        reject(errorMessage);
      }
  }, timeout);
  });
}


// delayP(3000).then((res)=>{
//   console.log(res);
// });





//^ 함수실행 -> 체이닝으로 표시한 것!
// delayP()
// .then((res)=>{console.log(res)})        // 더 줄여서 쓸 수 있음 그것은 연구해봐!
// .catch((err)=>{console.log(err)})       // 더 줄여서 쓸 수 있음 그것은 연구해봐!


// //^ 간단한 애니메이션
// delayP()

// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '0px';
// })















//* ---------------- async await ---------------------


async function delayA(){
  return '완료'
}

let result = await delayA();






// async function 라면끓이기(){

//   try{

//     await delayP()
//     first.style.top = '-100px';

//     await delayP()
//     first.style.transform = 'rotate(360deg)';

//     await delayP()
//     first.style.top = '0px';

//     await delayP()
//     console.log('계란넣기');

//     // throw new Error('계란 껍질이 들어가버렸다!');
//     await delayP()
//     console.log('그릇에담기');

//   }catch(err){
//       console.log(err);
//   }
// }

// 라면끓이기()