import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
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
										<Card.Title>Album List App</Card.Title>
										<Card.Text>
												This app allows you to search for an arttist or song, and find the albums for the artist and the album info.
										</Card.Text>
										<Link to="/album-app">Check it out</Link>
									</Card.Body>
								</Card>
						</CardDeck>
					</Col>
				</Row>
			</Col>
		 </BrowserRouter>
    );
}	