

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}



//* ------------------------- fetch 실습 ------------ 

//^ 너 어떻게 작동하니?
const seob = async (options = {}) =>{

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    //^ 헤더에도 새로운 합성을 주는 것!
    headers: {...defaultOptions.headers, ...options.headers}

  }

  //^ url 뺀 나머지 항목들만 모아놓은 것!
  console.log(restOptions);


  let response = await fetch(url,restOptions)

  if(response.ok){
    //^ 데이터를 추가한다 제이슨 파일로!
    response.data = await response.json()
  }

  return response;
}


seob.get = (url) => {
  seob({
    url,
    ...options
  })
}



//^ 받는 값이 다 다르니까 각각 확인해봐라
// seob();
// console.log( await seob() ); // 최종값인듯 싶다..