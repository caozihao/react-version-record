import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './ThemeContext';
import PropTypes from 'prop-types'

class Title extends Component{
  // 加了这句话后，就可以拿到this.context的值
  static contextType = ThemeContext;
  // static contextType = {
  //   background:PropTypes.string,
  //   color:PropTypes.string,
  // };
  
  render () {
    console.log('this.context ->',this.context)
    return (
      <ThemeContext.Consumer>
        {({background,color}) => (
          <h1 style={{background: background, color: color}}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}
 // 加了这句话后，就可以拿到this.context的值
// Title.contextType = ThemeContext;
export default Title;