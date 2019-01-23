import React, { Component,PureComponent } from 'react';
import propTypes from 'prop-types';

class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    // console.log('nextProps ->',nextProps)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  
  // }



  render() {
    console.log('child render ...')
    const {value} = this.props;
    return (
      <div>Props.value : {value}</div>
    );
  }
}
ChildComponent.propTypes = {};
ChildComponent.defaultProps = {};
export default ChildComponent;
