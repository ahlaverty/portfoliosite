import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Row, Col, Card, CardDeck, Image } from 'react-bootstrap';

import './portfolio.css';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.handleExamples = this.handleExamples.bind(this);

		this.state = {
			showExamples: false
		}
	}

	handleExamples() {
		this.setState({showExamples: true});
	}

	render() {
		const showExamples = this.state;
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
									  <Card.Title>Design Examples</Card.Title>
									  <Card.Text>Click for some small <Link onClick={this.handleExamples}>design examples</Link>.</Card.Text>
								  </Card.Body>
								  <Card.Footer>
								  <Card.Text><span className="font-bold">Technologies used:</span> Adobe Illustrator</Card.Text>
								  </Card.Footer>
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
				  {
					   showExamples ? (
							<Row className="mt-5 justify-content-center">
								<Col lg={8}>
									<Card>
										<Card.Body>
											<Card.Title>
												<h4>Design Examples</h4>
											</Card.Title>
											<Image src="../images/aarp-card-circle@3x.png" />
										</Card.Body>
									</Card>
								</Col>	
							</Row>)
							: null
				  }
			  </Col>
			</BrowserRouter>
		);
	}
}	

export default Portfolio;