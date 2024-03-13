import './App.css';
import { useState } from 'react';
import { tabs } from './Data/tabs';

function App() {
  let[activetabs,setactivetabs] = useState(0)
  let [activecontent, setactivecontent] = useState(tabs[0])
  let [todolist, setTodolist] = useState([])

  // let changedata=(index)=>{
  //   setactivetabs(index);
  //   setactivecontent(tabs[index]);
  // }
  let saveToDoList =(event)=>{
    
    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDolist = [...todolist,toname]
      setTodolist(finalDolist)
    }
    else{
      alert("Already exists")
    }
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value= {value} key={index} indexNUmber={index} 
      todolist={todolist }
      setTodolist={setTodolist}
      />
    )
  })
  return (
    <div className="App">
      {/* <div className="tabsOuter">
        <h1 style={{textAlign: 'center'}}>
          Law Prep vision
        </h1>
          <ul>
            {tabs.map((tabsItems,index)=>{
              return(
                <li>
                  <button onClick={()=>changedata(index)} className={activetabs===index ? 'activebutton' : ''}>{tabsItems.title}</button>
                </li>
                )
            })}
        </ul>
      </div> */}
      <h1>TODO LIST</h1>
      <form onSubmit={saveToDoList} >
        <input type="text" name='toname' /> <button>Save</button>
      </form> 
      <div className="outerDiv">
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoListItems({value,indexNUmber,todolist,setTodolist}){

  let [status,setStatus] = useState(false)

  let deleteRow =()=>{
    let finalData = todolist.filter((v,i)=>i!==indexNUmber)
    setTodolist(finalData)
  }
  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}> {indexNUmber+1} {value}<span onClick={deleteRow}>&times;</span></li>
  )
}