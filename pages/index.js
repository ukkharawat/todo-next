import TextButton from '../components/TextButton'
import TextInput from '../components/TextInput'
import TodoItem from '../components/TodoItem'
import styles from '../styles/Home.module.css'
import { Component } from "react";


class Home extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      items: []
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.resetText = this.resetText.bind(this)
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  resetText() {
    this.setState({
      text: ""
    })
  }

  addTodo() {
    this.setState({
      items: [...this.state.items, this.state.text]
    })
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.todo}>
          <TextInput placeholder="Write something" onChange={this.handleTextChange}></TextInput>
          <TextButton text="add" onClick={this.addTodo}></TextButton>
        </div>
        <div className={styles.items}>
          { 
            this.state.items.map((item, index) => {
              return <TodoItem key={index} item={item}></TodoItem>
            } )
          }
        </div>
      </div>
    )
  }
}

export default Home