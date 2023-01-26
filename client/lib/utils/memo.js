





//* 메모이제이션 IIEF패턴으로 사용해서 만들었다.
//* 캐시하는것
export const memo = (() => {
  const cache = {}

  return (key, callback) => {
    if(!callback) return cache[key];

    if(cache[key]){
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`)
      return
    }
    
    cache[key] = callback();
  
    console.log(cache);
  }
})()





memo('cube', () => document.querySelector('#cube'));


console.log(memo('cube'));















