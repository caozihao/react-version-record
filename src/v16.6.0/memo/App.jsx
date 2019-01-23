import React, { Component } from 'react';
import propTypes from 'prop-types';
import ChildComponent from './ChildComponent.jsx';
import FunChildComponent from './FunChildComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0,
      randomValue:0,
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}

  changeValue = (type)=>{
    this.setState({
      [type]:Date.now()
    })
  }
  // 普通的Component下，点击获得随机数也会发生一次渲染，而PureComponent不会

  render() {
    return (
      <div>
        <button onClick={this.changeValue.bind(this,'value')}>更新值</button>
        <button onClick={this.changeValue.bind(this,'randomValue')}>获得随机数</button>
        <ChildComponent value={this.state.value}/>
        <FunChildComponent value={this.state.value}/>
      </div>
    );
  }
}
App.propTypes = {};
App.defaultProps = {};
export default App;
