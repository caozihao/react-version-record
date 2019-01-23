import React, { Component } from 'react';
import getItemHooks from './GetItemHooks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDom:[]
    };
  }
  componentDidMount() {
    const data1 = getItemHooks(1);
    const data2 = getItemHooks(2);
    const arr = [data1,data2];
    const result = [];
    if(data1 && data2){
      for(let item of arr){
        for(let v in item){
          result.push(<p><span>{v}</span><span>{item[v]}</span></p>)
        }
      }
    }
    this.setState({
      dataDom:result
    })

  }
  componentWillReceiveProps(nextProps) {}
  render() {
    return (
      <div>
        <h1>展示数据</h1>
        {this.state.dataDom}
      </div>
    );
  }
}
App.propTypes = {};
App.defaultProps = {};
export default App;
