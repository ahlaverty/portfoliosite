import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './list.css';

export default class List extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         idNum: null,
         todos: props.todos
      };

      this.deleteToDo = this.deleteToDo.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
   }

   deleteToDo(id) {
      let toDos = this.state.todos.filter((obj)=> {
         return obj.id !== id;
      });
      this.setState({todos: toDos});
   }

   handleInputChange(item, event){
      if(item.completed === false ) {
         document.getElementById("todo-" + item.id).classList.add("strike-through");
         item.completed = true;
         console.log(this.state.todos);
      } else if(item.completed === true) {
         console.log(item);
         document.getElementById("todo-" + item.id).classList.remove("strike-through");
         item.completed = false;
      } else {
         return;
      }
   }

   componentDidMount(){
      this.state.todos.map((itemToDo) => {
         return itemToDo.completed = false;
      });
   }

   render() {
      const listItems = this.state.todos.map((todoItem) =>
         <li key={todoItem.id}
            className="d-flex align-items-center justify-content-between" 
            id={`todo-${todoItem.id}`}>
            <div className="holder">
               <Form>
                  <Form.Group>
                     <Form.Check
                        inline
                        id="formBasicCheckbox"
                        name="isDone"
                        type="checkbox" 
                        checked={this.state.checked} 
                        onChange={(e) => this.handleInputChange(todoItem, e)} />
                  </Form.Group>
               </Form>
               <span>{todoItem.title}</span>
            </div>
            <Button className="toolbar delete-btn"
               onClick={this.deleteToDo.bind(this, todoItem.id)}>
               <FontAwesomeIcon icon={faTrash} size="lg" />
            </Button>
         </li>
      );

      return (
         <React.Fragment>
            <ul className="todo-list">{listItems}</ul>
         </React.Fragment>
      );
   }

}