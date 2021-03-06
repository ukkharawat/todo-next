import { Component } from "react";

const style = {
  borderRadius: '4px',
  padding: '8px',
  border: 'None',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
}

class TextInput extends Component {
  render() {
    return (
      <input ref={input => this.input = input} type="text" style={style} value={this.props.text} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
   )
  }
}

export default TextInput;