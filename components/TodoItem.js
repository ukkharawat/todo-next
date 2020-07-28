import { Component } from "react";

const style = {
  
}

class TodoItem extends Component {
  render() {
    return (
    <p style={style}>{ this.props.item }</p>
   )
  }
}

export default TodoItem;