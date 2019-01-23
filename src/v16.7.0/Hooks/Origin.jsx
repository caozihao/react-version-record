import React, { Component,Fragment } from 'react';
import propTypes from 'prop-types';

class Origin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
 
  setCount = ()=>{
    let  {count} = this.state;
    count ++ ;
    this.setState({
      count,
    })
  }

  render() {
    const { count } = this.state; 
    return (
      <div>
        <h1>React Origin</h1>
        <p> {count} </p>
        <button onClick={this.setCount}>
          Click me
        </button>
      </div>
    );
  }
}
Origin.propTypes = {};
Origin.defaultProps = {};
export default Origin;
