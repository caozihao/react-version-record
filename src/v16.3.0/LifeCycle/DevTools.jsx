import React, { Component } from 'react';
import QInput from './QInput.jsx';


class DevTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:1
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}

  changeValue = (type)=>{
    let value = Date.now();
    if(type === 'clean'){
       value = '';
    }
    this.setState({
      value
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeValue.bind(this,'give')}>传值</button>
        {/* <button onClick={this.changeValue.bind(this,'clean')}>清除</button> */}
        <QInput value = {this.state.value}/>
      </div>
    );
  }
}
DevTools.propTypes = {};
DevTools.defaultProps = {};
export default DevTools;
