


/* redyState
0: uninitalized /초기화
1: loading / 로딩
2: loaded / 로딩이 완료된
3: interactive / 인터렉티브
4: complete / 완료
*/


//*---- xhrData 함수 만들기 method, url-------------------------------------

function xhrData({ //^ 애초에 들어오는 변수에 구조분해 할당 해주는 것!
  url = '',
  method = 'GET',
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
  }
}){
  

  //const {method,url,body} = options;

  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  // xhr.open(options.method, options.url)   //^ 구조분해 할당 전
  xhr.open( method, url )                    //^ 구조분해 할당 후

  //^ 엔트리스로 헤더의 키 밸류가 반환된다.
  console.log(Object.entries(headers));
  /* 결과 (2) [Array(2), Array(2)]
          0: (2) ['Content-Type', 'application/json']
          1: (2) ['Access-Control-Allow-Origin', '*']
          length: 2
          [[Prototype]]: Array(0) */

  
  //^ 이것의 목적은? ^ 키 밸류를 순환을 돌면서 넣어버리는 것!

  Object.entries(headers).forEach(([key,value])=>{
    //^ 헤더를 리퀘스트할때 셋팅하는 방법
    console.log(key, value);
    /* 결과 Content-Type application/json
          Access-Control-Allow-Origin * 
    */

    //^ 키, 값을 받아서 헤더를 리퀘스트 할 때 세팅하는 내장함수!
    xhr.setRequestHeader(key,value);

  })




  xhr.addEventListener('readystatechange',() => {
    // 객체 구조 분해 할당
    const {status,readyState,response} = xhr;
    
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');

        //^ JSON팔스를 이용해 문자열 -> 객체화 후, 콘솔내용을 보여준다.
        console.log(JSON.parse(response));
      }
    }else{
        console.log('통신실패');
    }
  })
  
  // 서버의 요청 + POST내용도 이때 같이 보낸다
  //^ 객체를 문자열로 바꺼서 보낸다.
  xhr.send(JSON.stringify(body));
}
//*-------------------------------------------------------------------------


xhrData({
  url: 'https://jsonplaceholder.typicode.com/users'})


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











