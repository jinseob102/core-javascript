import { getNode } from "./getNode.js"
import { addClass, removeClass } from './css.js';



function showAlert(node,text='에러입니다.',timeout = 1500){

  if(typeof node === 'string') node = getNode(node);
  node.textContent = text; //! ???? 이부분 어뜨케 되는거지?
  
  //^ showAlert하는 순간 is-active 추가
  addClass(node, 'is-active');
  //^ 일정 시간이 지나면 is-active가 remove가 되는 것
  setTimeout(()=>{
    removeClass(node,'is-active');
  },timeout)

}






showAlert('.alert','올바른 정보를 입력해주세요',3000)













