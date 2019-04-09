import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
    this.nextTodoId = 0;
  }

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.filterTodos(this.state.todos)}
          onClick={this.toggleCompleted}
        />
        <Footer filter={this.state.filter} onClick={this.changeShowState} />
      </div>
    );
  }

  // 添加新的事项
  addTodo = text => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  // 改变事项完成状态
  toggleCompleted = id => {
    const newtTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    this.setState({
      todos: newtTodos
    });
  };

  // 当前显示事项完成状态
  changeShowState = keyword => {
    this.setState({
      filter: keyword
    });
  };

  // 按是否完成状态筛选当前事项
  filterTodos = todos => {
    const newTodos = todos.filter(item => {
      if (this.state.filter === "active") {
        return !item.completed;
      } else if (this.state.filter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
    return newTodos;
  };
}

export default App;
