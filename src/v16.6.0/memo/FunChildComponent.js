import React, { Component,memo } from 'react';
// 1，memo类似于pureComponent，可以让父组件无关的state变化不引起子组件变化
// 2，PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用。
export default memo(
  function funChildComponent (props){

    console.log('funChild render ...')
    return (
      <div>
        Props.value: {props.value}
      </div>
    )
  }
)