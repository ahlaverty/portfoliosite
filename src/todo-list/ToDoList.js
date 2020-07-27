import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import List from "./list/List";

import "./todo-list.css";

import todoItems from "./data.json";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      todo: "",
      items: todoItems,
      added: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit = (event) => {
    const todos = this.state.items;
    const newIDNum = todos[todos.length - 1].id;
    console.log(newIDNum);
    const newToDo = {
      id: newIDNum + 1,
      title: this.state.todo,
      completed: false,
    };
    todos.push(newToDo);
    this.setState({
      todo: "",
      items: todos,
    });
    console.log(todos);
    document.getElementById("todoItem").value = "";
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h1 className="text-center">My To Do List</h1>
                <Row className="justify-content-center mt-4 mb-3">
                  <Col sm={12} lg={7}>
                    <Form
                      inline
                      onSubmit={this.handleSubmit}
                      className="justify-content-center"
                    >
                      <Form.Group id="todoItem">
                        <Form.Control
                          required
                          type="text"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Button className="primary-btn" type="submit">
                        <FontAwesomeIcon icon={faPlus} className="mr-3" />
                        Add to do
                      </Button>
                    </Form>
                  </Col>
                  {/* <Col>
                  <Button className="secondary-btn">Select all</Button>
               </Col> */}
                </Row>
                <Row className="justify-content-center">
                  <Col sm={12} lg={7}>
                    <List todos={this.state.items} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
