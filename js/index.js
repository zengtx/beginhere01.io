
// 当leftdiv加载的时候 调用的函数; 在待办清单中创建一个p标签，内容为创建待办清单
// function qingDan(){
//   let toDoList = window.document.getElementsById('toDoList');
//   let p = window.document.createElement('p'); // 创建一个p标签
  
//   p.innerText = "创建待办清单";
//   toDoList.appendChild(p);//将p标签放在toDoList中
  
// }

//定义一个daiBan 值为布尔
let daiBan = false;


//定义一个toDo函数，当按钮被点击时调用
function toDo(){
  let anNiu = window.document.getElementById('anNiu');
  let shuRuKuang = window.document.getElementById('shuRuKuang');
  let toDoList = window.document.getElementById('toDoList');//声明一个toDoList获取到div标签
  let toDoThing = window.document.getElementById('toDoThing');  
  
  //当内容为空时，在输入框中显示“输入待办事项”
 
  if(daiBan){
    daiBan = false;
    shuRuKuang.value = "输入待办事项";
  }else{
    daiBan = true;
    
    let toDoList = window.document.createElement('div');//创建一个toDoList的div标签
    // toDoList.class = toDoList flex-bt;
    toDoList.className = "toDoList flex-bt";//给div添加class属性
    qingDan.appendChild(toDoList);

    let toDoItem = window.document.createElement('div');//创建一个toDoItem的div标签
    toDoList.appendChild(toDoItem);//将toDoItem放在toDoList中

    let toDoThing = window.document.createElement('p');//声明一个toDoThing，值为创建一个p标签
    toDoItem.appendChild(toDoThing);//将p标签放在toDoItem的div中
  
    let check = window.document.createElement('div');//声明一个toDoItem的div标签
    toDoList.appendChild(check);//将check的div放在toDoList中

    let done = window.document.createElement('input');//声明一个done，创建“input”标签
    // done.style = "checkbox";//将input改成checkbox类型
    // done.styleName = "checkbox";
    // done.className.style = "radio";
    done.setAttribute("type","checkbox"); //将input改成checkbox类型
    check.appendChild(done);//将done放在父级check中
    let neiRong = shuRuKuang.value;
    toDoThing.innerText = neiRong;
  }
}
