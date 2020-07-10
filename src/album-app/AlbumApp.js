import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import AlbumCollection from './album-collection/AlbumCollection';

import './album-app.css';
import AlbumDetails from './album-details/AlbumDetails';

export default class AlbumApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleDetails = this.handleDetails.bind(this);
      this.state = {
         isDetailVisible: false,
         
      }
   }
   
   handleDetails= () => {
      this.setState(
         {
            isDetailVisible: !this.state.isDetailVisible
         }
         );
      }
      
   componentDidMount() {
      console.log(this.props.location);
      //const bgColorChange = this.props.location.state.bgColorChange;
      
      // if(bgColorChange) {
      //    const body = document.getElementsByClassName("App");
      //    body.style.background = "#ffffff";
      // }
   }

   render() {
      return(
         <Container fluid>
            <Row className="align-items-center justify-content-between">
               <Col>
                  <h1 className="album-collection-title">My Album Collection</h1>
               </Col>
               <Col lg="auto">
                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button>Search</Button>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Row>
                     <AlbumCollection onShowDetails={this.handleDetails} />
                  </Row>
               </Col>
               <Col lg="auto">
                  <AlbumDetails isDetailVisible={this.state.isDetailVisible} />
               </Col>
            </Row>
         </Container>
      );
   }
}