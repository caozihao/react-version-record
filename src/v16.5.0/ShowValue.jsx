import React, { Component } from 'react';

class ShowValue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}
ShowValue.propTypes = {};
ShowValue.defaultProps = {};
export default ShowValue;
