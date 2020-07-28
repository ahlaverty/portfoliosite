import React from "react";
import { Row, Col, CardDeck, Card, Table } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faExclamation,
  faThumbtack,
  faCalendarAlt,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import TaskItems from "./task-table/TaskItems";

import "./dashboard.css";

export default class TaskDashboard extends React.Component {
  render() {
    return (
      <Col className="dashboard">
         <Row>
            <Col>
               <h1 className="text-center my-0 font-semibold">CTO's Tasks</h1>
            </Col>
         </Row>
         <Row>
            <Col>
               <h5 className="text-right mt-4">Today is: August 3, 2020</h5>
            </Col>
         </Row>
         <Row id="dashboardIcon" className="mb-1 mb-md-3 mb-lg-4">
                <Col sm={12} className="px-0">
                  <CardDeck>
                    {/* <!-- OPEN TASK CARD--> */}
                    <Col sm={6} md>
                      <Card id="openCard" className="branchCard">
                        <Card.Body>
                          <div className="taskOpen d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon
                              icon={faListUl}
                              size="2x"
                              id="openIcon"
                              className="indicator"
                            />
                            <div className="numbers">5</div>
                          </div>
                          <div className="d-flex cardType">Open</div>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* <!--LATE TASK CARD--> */}
                    <Col sm={6} md>
                      <Card id="lateCard" className="branchCard lateCard-off">
                        <Card.Body>
                          <div className="taskLate d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon
                              id="lateIcon"
                              icon={faExclamation}
                              size="2x"
                              className="indicator"
                            />
                            <div className="numbers">1</div>
                          </div>
                          <div className="d-flex cardType">Late</div>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* <!--this week card--> */}
                    <Col sm={6} md>
                      <Card
                        id="thisWeekCard"
                        className="branchCard thisWkCard-off"
                      >
                        <Card.Body>
                          <div className="taskLate d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon
                              id="thisWkIcon"
                              icon={faThumbtack}
                              size="2x"
                              className="indicator"
                            />
                            <div className="numbers">2</div>
                          </div>
                          <div className="d-flex cardType">Due this Week</div>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* <!--next week card--> */}
                    <Col sm={6} md>
                      <Card
                        id="nextWeekCard"
                        className="branchCard nextWkCard-off"
                      >
                        <Card.Body>
                          <div className="taskComp d-flex justify-content-between align-items-center">
                              <FontAwesomeIcon
                                 id="nextWkIcon"
                                 icon={faCalendarAlt}
                                 className="fa-2x indicator" />
                            <div className="numbers">2</div>
                          </div>
                          <div className="d-flex cardType">Due next Week</div>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* <!--closed--> */}
                    <Col sm={6} md>
                      <Card
                        id="closedCard"
                        className="branchCard closedCard-off"
                      >
                        <Card.Body>
                          <div className="taskClosed d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon
                              id="closedIcon"
                              icon={faCheck}
                              className="indicator" />
                            <div className="numbers">2</div>
                          </div>
                          <div className="d-flex cardType">Closed</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </CardDeck>
                </Col>
         </Row>

              {/* <!--         <div className="row align-items-center align-self-stretch mb-3"><div id="rangeLabel" className="col-auto pr-0"><label for="dateRangeLabel" className="col-form-label">Filter range</label></div><div className="col-auto" id="dateRangeDiv"><input type="text" className="daterange" /></div><div id="dateSearch" className="col-auto pl-0"><button className="btn btn-sm" id="dateSearchBtn" type="button"><i className="fas fa-search"></i></button></div></div>
                  --> */}
         <Row>
            <Col>
               <Table hover responsive>
                  <thead>
                  <tr className="bg-primary text-white text-nowrap">
                     <th scope="col">ID #</th>
                     <th scope="col">Task</th>
                     <th scope="col">Assigned To</th>
                     <th scope="col-sm-0 col-md">Priority</th>
                     <th scope="col">Due Date</th>
                     <th scope="col">% Complete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <TaskItems />
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Col>
    );
  }
}
