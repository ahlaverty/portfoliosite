import React from "react";
import { Row, Col, CardDeck, Card } from "react-bootstrap";
// import { useRouteMatch } from "react-router-dom";

export default function PortfolioContent() {
  //   let { path } = useRouteMatch();

  return (
    <Col>
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Transitioning off WordPress</Card.Title>
                <Card.Text>
                  When I was at Investor Cash Management, their corporate site
                  was setup on WordPress. No one had previously actively
                  maintained it, so the site was crashing pretty regularly.
                </Card.Text>
                <Card.Text>
                  As a stop gap until the new website design was approved, I
                  offered to redo the website and move it onto an Amazon S3
                  bucket. The site was successfully transistioned.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <span className="font-bold">Technologies used:</span> HTML,
                  CSS, SCSS, Bootstrap 4
                </Card.Text>
              </Card.Footer>
            </Card>
            {/* <Card>
                     <Card.Body>
                        <Card.Title>To-do List ReactJS App</Card.Title>
                        <Card.Text>
                              This is a simple app allows you to add to-dos to a list, delete them, and mark them done.
                        </Card.Text>
                        <Card.Text>Check it out <Link to={`${path}/todo-list`}>here</Link>.</Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <Card.Text><span className="font-bold">Technologies used:</span> ReactJS, SCSS, React-Bootstrap</Card.Text>
                     </Card.Footer>
                  </Card> */}
            {/* <Card>
                     <Card.Body>
                        <Card.Title>Task Dashboard</Card.Title>
                        <Card.Text>This is a task dashboard app. It allows you to see the status of the items, add items, and complete them.</Card.Text>
                        <Card.Text>View it <Link to={`${path}/task-dashboard`}>here</Link>.</Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <Card.Text><span className="font-bold">Technologies used:</span> ReactJS, SCSS, React-Bootstrap</Card.Text>
                     </Card.Footer>
                  </Card> */}
          </CardDeck>
        </Col>
      </Row>
    </Col>
  );
}
