import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Row, Col, Card, CardDeck, Image } from 'react-bootstrap';

import designExample1 from '../images/aarp-card-circle@2x.png';
import designExample2 from '../images/wisdomtre-card-greengradient@3x.png';
import designExample3 from '../images/wisdomtree-card-graygradient@3x.png';

import './portfolio.css';

export default function Porfolio() {

	return(
		<BrowserRouter>
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
									<Card.Text>When I was at Investor Cash Management, their corporate site was setup on WordPress. No one had previously actively maintained it, so the site was crashing pretty regularly.</Card.Text>
									<Card.Text>As a stop gap until the new website design was approved, I offered to redo the website and move it onto an Amazon S3 bucket. The site was successfully transistioned. It can be seen at <a href="https:///www.investorcashmanagement.com">www.investorcashmanagement.com</a>.</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Card.Text><span className="font-bold">Technologies used:</span> HTML, CSS, SCSS, Bootstrap 4</Card.Text>
								</Card.Footer>
							</Card>
							<Card>
								<Card.Body>
									<Card.Title>To-do List ReactJS App</Card.Title>
									<Card.Text>
											This is a simple app allows you to add to-dos to a list, delete them, and mark them done.
									</Card.Text>
									<Card.Text>Check it out <Link to="/portfolio/todo-list">here</Link>.</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Card.Text><span className="font-bold">Technologies used:</span> ReactJS, SCSS, React-Bootstrap</Card.Text>
								</Card.Footer>
							</Card>
						</CardDeck>
					</Col>
				</Row>
				<Row  className="mt-5 text-black">
				<Col lg="auto">
					<Card>
						<Card.Body>
							<Card.Title>Design Examples</Card.Title>
							<Row>
								<Col>
									<h6>Debit Card Examples</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<Image fluid className="design-example-image" src={designExample1} />
								</Col>
								<Col>
									<Image fluid className="design-example-image" src={designExample2} />
								</Col>
								<Col>
									<Image fluid className="design-example-image" src={designExample3} />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>	
			</Row>
			</Col>
		</BrowserRouter>
	);
}


