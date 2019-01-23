import React, { useState, } from 'react';

const GetItem = (id)=>{
  const [detail,setDetail] = useState({});
  const dict = {
    1:{
      name:'白剑',
      power:97,
      gettingDifficulty:'Hard',
    },
    2:{
      name:'赫尔',
      power:95,
      gettingDifficulty:'Normal',
    }
  }
  
  // useEffect仅在您希望在组件的生命周期中产生副作用时才有用
  // useEffect(()=>{
    setTimeout(()=>{
      setDetail(dict[id]);
    },1000)
  // },[detail])


  return detail;

}

export default GetItem;