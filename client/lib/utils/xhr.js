/* redyState
0: uninitalized /초기화
1: loading / 로딩
2: loaded / 로딩이 완료된
3: interactive / 인터렉티브
4: complete / 완료
*/

import { typeError } from "../error/typeError.js";

//*---- xhrData 함수 만들기 method, url-------------------------------------

//^ 콜백방식 - 애초에 들어오는 변수에 구조분해 할당 해주는 것!
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  // const {url,method,body} = options;

  const xhr = new XMLHttpRequest();
  // 비동기 통신 오픈
  // xhr.open(options.method, options.url)   //^ 구조분해 할당 전
  xhr.open(method, url); //^ 구조분해 할당 후

  //^ 엔트리스로 헤더의 키 밸류가 반환된다.
  // console.log(Object.entries(headers));
  /* 결과 (2) [Array(2), Array(2)]
          0: (2) ['Content-Type', 'application/json']
          1: (2) ['Access-Control-Allow-Origin', '*']
          length: 2
          [[Prototype]]: Array(0) */

  //^ 이것의 목적은? - 키 밸류를 순환을 돌면서 넣어버리는 것!
  // Object.entries(headers).forEach(([key,value])=>{
  //^ 헤더를 리퀘스트할때 셋팅하는 방법
  //   console.log(key, value);
  // 결과 Content-Type application/json
  //     Access-Control-Allow-Origin *
  //^ 키, 값을 받아서 헤더를 리퀘스트 할 때 세팅하는 내장함수!
  //   xhr.setRequestHeader(key,value);})

  //* 특강수업 콜백할때 이 예제를 했었다 -------------------------------
  xhr.addEventListener("readystatechange", () => {
    // 객체 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");

        //^ 아래 선언해준 곳으로 파라미터가 전달이 된다.
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error();
      onFail("통신 실패");
    }
  });

  // 서버의 요청 + POST내용도 이때 같이 보낸다
  //^ 객체를 문자열로 바꺼서 보낸다.
  xhr.send(JSON.stringify(body));
}
//*----------------------------------------------------------

//*-------------------------------------------------------------------------

// //^ 첫번째꺼 값을 던지는 부분
// xhrData({
//   url:'https://jsonplaceholder.typicode.com/user/1',
//   onSuccess: (result)=>{
//     console.log(result);
//   },
//   onFail: (err)=>{
//     console.error(err);
//   }
// })

//todo 여기가 뭔지 연구좀 해봐라----------------------------------

//^ 메서드처럼 사용하는 법
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// //^ 매서드를 호출해서 쓰는 것
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result)=>{
//     console.log(result);
//   },
//   (err)=>{
//     console.log(err);
//   }
// )

//todo ----------------------------------------------------------

// xhrData('POST', 'https://jsonplaceholder.typicode.com/users',{
//   //^ id를 제외한 데이터를 넣는다!
//   "name": "kimjinseob",
//   "username": "seovee",
//   "email": "jinseob102@naver.com",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "010-4711-7126",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// })

/* 
let movePage = function (주소,성공,실패){
  // 조건에 따라 조건이 잘 맞으면 성공() || 실패()
  if(주소 === '네이버'){
    성공(주소);
  }else{
    실패();
  }
};
movePage(
  '네이바',
  (주소)=>{
    console.log('3초후 '+ 주소 +'로 이동합니다.');
    setTimeout(() => {
      window.location.href = 'https://www.naver.com/'
    }, 3000);
  }
  ,
  ()=>{
    console.log('잘못된 주소를 입력했습니다.');
  })
 */

// -------------------- promise API ------------------------
const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

// ---------------- xhr을 프라미스로 표현하는 식 -------------------
export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  //^ Object.assign이란 =>
  const { method, url, body, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) typeError("서버와 통신할 유알엘 인자는 반드시 필요합니다.");

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          //^ 리졸브에 넣고 값을 then으로 전달하는 것
          resolve(JSON.parse(response));
        }
      } else {
        reject("에러입니다");
      }
    });
  });
}

// ----------------- 값을 받아서 실행되는 부분 -------------------
// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users/1'
// })
// .then((res)=>{
//  console.log((res));
// })
// .catch((err)=>{
//   console.log((err));
// })

// 값을 호출함에 동시에 리턴을 해줘 뒤에오는 식의 then을 쓸 수 있게 하는 것
xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "POST",
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "PUT",
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: "DELETE",
  });
};

// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users/1') // promise
// .then((res)=>{
//  console.log((res));
// })
// .catch((err)=>{
//   console.log((err));
// })
