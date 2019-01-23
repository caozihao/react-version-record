import React, { useState,useEffect,useContext,useReducer } from 'react';
import themeContext from './themeContext.jsx';
// 目前Hooks的方法只在版本 16.8.0-alpha.1 上 -- 2019.1.22

// 钩子是JavaScript函数，但它们强加了两个额外的规则
// 只能在顶层调用Hooks 。不要在循环，条件或嵌套函数中调用Hook。
// 仅从React功能组件调用Hooks 。不要从常规JavaScript函数调用Hook。
function Example(props) {
  // 1,useState是一种使用this.state类中提供的完全相同功能的新方法。通常，当函数退出时变量“消失”，但React保留状态变量。
  // 2,因此将0变量作为初始状态传递
  // 3,看源码 useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // 4,count是状态变量名；setCount是一个方法，得到prevState，并返回最新的state；0 是出事值
  const [count,setCount] = useState(0);
  const [name,setName666] = useState('棕色尘埃真好玩');

  //  类似于 to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
 
  // 在不引入嵌套的情况下订阅React上下文(从React.createContext返回的值)
  const theme = useContext(themeContext);
  console.log('context theme ->',theme);

  // 允许您使用reducer管理复杂组件的本地状态：
  // const [todos, dispatch] = useReducer(todosReducer);

  return (
    <>
      <h1>React Hooks</h1>
      <p> {count} </p>
      <p> {name} </p>
      <button onClick={()=>setCount(count + 1)}>
        Click me count
      </button>  
      <button onClick={()=>setName666(name + '啊')}>
        Click me name
      </button>  
    </>
  );
}

// Example.contextType = themeContext;

export default Example;