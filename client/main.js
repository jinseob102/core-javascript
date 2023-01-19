/* global gsap */

import { 
  insertLast,
  seob,
  delayP,
  createUserCard,
  getNode,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  changeColor,
  attr
 } from "./lib/index.js";




// rendingUserList
// ajax get user List


// 유저 카드 생성
// 생성된 카드로 랜더링

// 미션: renderUserCard 함수를 만들기 -> createUserCard를 던져서 -> 렌더링 되도록

const userCardContainer = getNode('.user-card-inner')

async function rendingUserList(){
  
  renderSpinner(userCardContainer)
  

  try{
    await delayP(800)
    getNode('.loadingSpinner').remove();


    // todo 왜 여기에 서버주소를 넣는것인가? 알아보자!!
    let response = await seob.get( 'http://localhost:3000/users' )

    let userData = response.data;


    //^ userData의 모든 배열을 forEach로 나열해서 렌더링 바로 시키기
    //! 중요하고 재밋군?
    userData.forEach((data)=>{
      // console.log(data);
      //^ renderUserCard라는 모듈함수 만들어서 사용 한 것
      renderUserCard(userCardContainer,data)
    })

    changeColor('.user-card');

    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2,
    })
  }catch(err){
    // console.log(err);
    //^ 주소가 틀리거나 통신이 안되면 표시할 정보가 없다는 표시하기
    renderEmptyCard(userCardContainer)
  }

  //^ 배열이 들어왔을 땐 어떻게 렌더링 할까?
  // 배열 받음 -> 배열을 객체화 해야겠지? -> 그러다음에 아이디를 분류해서 렌더링!
}

rendingUserList()


// 삭제버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.


function handler(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteButton || !article) return;


  let id = attr(article,'data-index').slice(5);


  seob.delete(`http://localhost:3000/users/${id}`).then(()=>{
    
  //^ 다시 바로 새롭게 순서를 맞춰야하기 때문에, 내용을 모두 지운다
    userCardContainer.innerHTML = '';

    //^ 다 삭제하고 목록을 다시 로드함
    rendingUserList();
  })

  // console.log(id);
}


userCardContainer.addEventListener('click',handler)












































































// ------------------------아래는 1월 18일(수)에 했던 것들 -----------------------------
//  async function render(){

//   await delayP(2000);
//   let response = await seob.get('https://jsonplaceholder.typicode.com/users/1')



//   console.log(response.data);
// }


// render()




// //* 모듈함수 쓰는것
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


