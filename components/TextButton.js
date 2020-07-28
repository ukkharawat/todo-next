import { Component } from "react";

const style = {
  borderRadius: '4px',
  padding: '8px',
  border: 'None',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
}

class TextButton extends Component {
  render() {
    return (
      <button style={style} onClick={this.props.onClick}>
        { this.props.text }
      </button>
    )
  }
}

export default TextButton;