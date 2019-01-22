import React, { Component } from 'react';
import ShowValue from './ShowValue.jsx';

class QInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      props,
    };
  }

  // componentWillReceiveProps(nextProps){
  //   console.log('nextProps ->',nextProps)
  //   if(nextProps.value !== this.state.value){
  //       this.setState({
  //           value:nextProps.value
  //       })
  //   }
  // }

  // 在componentDidUpdate中进行异步操作，驱动数据的变化
  componentDidUpdate(prevProps, prevState){
     console.log('componentDidUpdate prevState.value ->',prevState.value);
      // console.log('componentDidUpdate state.value ->',this.state.value);
    // if(prevState.value !== this.state.value){
    //   // console.log('this.props.value ->',this.props.value);
    //   // console.log('prevProps.value ->',prevProps.value);
    //   // console.log('-------------')
    //   this.setState({
    //     value:this.state.value
    //   })
    // }
  }

  // 在getDerivedStateFromProps中进行state的改变
  // 关于getDerivedStateFromProp中的困惑，详情请见 https://juejin.im/post/5bea68a6e51d450cb20fdd70
 static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerivedStateFromProps props.value ->',nextProps.value);
    // console.log('getDerivedStateFromProps state.value ->',prevState.value);
    const {value} = nextProps;
    const {props } = prevState;
    if(value !== props.value){
      return {
        value,
        props:{
            value
        }
      }
    } 
     return null;
   }  

  changeValue = (e)=>{
    this.setState({
      value:e.target.value
    })
  }
   
  clean = ()=>{
    this.setState({
      value:''
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange = {this.changeValue}/>
        <button onClick={this.clean}>清除</button>
        <ShowValue value={ this.state.value}/>
      </div>
    );
  }
}
QInput.propTypes = {};
QInput.defaultProps = {};
export default QInput;
