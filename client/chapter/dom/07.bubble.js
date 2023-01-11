/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */




const visual = getNode('.visual')
const news = getNode('.news')
const desc = getNode('.desc')

visual.addEventListener('click',(e){
  let elem = e.currentTarget;
  console.log('%c visual','background:dodgerblue');

  css('.pop','display','block');
})

// news.addEventListener('click',function(){
//   console.log('%c news','background:dodgerblue');
// })

// desc.addEventListener('click',function(e){
//   e.stopPropagation() // 밑으로 전파되는거 멈춰!!!!
//   console.log('%c desc','background:dodgerblue');

// })


getNode('.pop').addEventListener('click',(e) => {
  
  css('.pop','display','none');
})







/* 캡처링 ----------------------------------------------------------------- */