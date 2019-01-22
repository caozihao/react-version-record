import React, { Component } from 'react';
const CIRCLE_SIZE = 85;

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCapture: false,
      circleLeft: 80,
      circleTop: 80,
    };
    this.isDragging = false;
    this.previousLeft = 0;
    this.previousTop = 0;
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}

  onDown = event => {
    this.isDragging = true;
    event.target.setPointerCapture(event.pointerId);

    // We store the initial coordinates to be able to calculate the changes
    // later on.
    this.extractPositionDelta(event);
  };

  onMove = event => {
    if (!this.isDragging) {
      return;
    }
    const {left, top} = this.extractPositionDelta(event);

    this.setState(({circleLeft, circleTop}) => ({
      circleLeft: circleLeft + left,
      circleTop: circleTop + top,
    }));
  };

  onUp = event => (this.isDragging = false);
  onGotCapture = event => this.setState({hasCapture: true});
  onLostCapture = event =>
    this.setState({hasCapture: false});

  extractPositionDelta = event => {
    const pageX = event.pageX;
    const pageY = event.pageY;
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log('pageX ->',pageX);
    console.log('pageY ->',pageY);
    console.log('clientX ->',clientX);
    console.log('clientY ->',clientY);
    
    const delta = {
      left: clientX - this.previousLeft,
      top: clientY - this.previousTop,
    };
    this.previousLeft = clientX;
    this.previousTop = clientY;
    return delta;
  };
  render() {

    const {hasCapture, circleLeft, circleTop} = this.state;

    const boxStyle = {
      border: '1px solid #d9d9d9',
      margin: '10px 0 20px',
      minHeight: 400,
      width: '100%',
      position: 'relative',
    };

    const circleStyle = {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      position: 'absolute',
      left: circleLeft,
      top: circleTop,
      backgroundColor: hasCapture ? 'blue' : 'green',
      touchAction: 'none',
    };



    return (
     <div style={boxStyle}>
        <div
          style={circleStyle}
          onPointerDown={this.onDown}
          onPointerMove={this.onMove}
          onPointerUp={this.onUp}
          onPointerCancel={this.onUp}
          onGotPointerCapture={this.onGotCapture}
          onLostPointerCapture={this.onLostCapture}
        />
      </div>
    );
  }
}
Point.propTypes = {};
Point.defaultProps = {};
export default Point;
