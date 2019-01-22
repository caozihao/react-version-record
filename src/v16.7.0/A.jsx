import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  onPointerDown = (e)=>{
    console.log('e ->',e);
  }

  onPointerMove = (e)=>{
    console.log('e ->',e);
  }

  onPointerUp = (e)=>{
    console.log('e ->',e);
  }

  render() {
    return (
      <div 
        onPointerDown = {this.onPointerDown}
        onPointerMove = {this.onPointerMove}
        onPointerUp = {this.onPointerUp}
      >A</div>
    );
  }
}
A.propTypes = {};
A.defaultProps = {};
export default A;
