import React,{Component} from 'react';
import ThemeContext from './ThemeContext';


const Title = (props) =>{
  return (
    <ThemeContext.Consumer>
      {({background,color}) => (
        <h1 style={{background: background, color: color}}>
          {props.children}
        </h1>
      )}
    </ThemeContext.Consumer>
  );
}

export default Title;