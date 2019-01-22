import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {ThemeContext} from './ThemeContext';

class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;