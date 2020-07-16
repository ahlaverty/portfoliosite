import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col, Card, CardDeck } from 'react-bootstrap';

import './portfolio.css';

export default function Portfolio(){

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
									<Card.Text className="mt-5"><span className="font-bold">Technologies used:</span> HTML, CSS, SCSS, Bootstrap 4</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Body>
									<Card.Title>Design Examples</Card.Title>
									<Card.Text>Here are some small design examples.</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Body>
									<Card.Title>To do List App</Card.Title>
									<Card.Text>
											This app allows you to create a to do list.
									</Card.Text>
									<Card.Text>Coming Soon!</Card.Text>
									{/* <Link to="/portfolio/album-app">Check it out</Link> */}
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
				</Row>
			</Col>
		 </BrowserRouter>
    );
}	