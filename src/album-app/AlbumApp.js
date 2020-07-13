import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import AlbumCollection from './album-collection/AlbumCollection';

import './album-app.css';
import AlbumDetails from './album-details/AlbumDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class AlbumApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleDetails = this.handleDetails.bind(this);
      this.state = {
         isDetailVisible: false,
         albums: [],
         errorInfo: null,
         isLoading: false,
         albumDetails: null
      }
   }
   
   handleDetails = (isShowDetail, albumBackground) => {
      this.setState(
         {
            isDetailVisible: isShowDetail,
            albumDetails: albumBackground
         }
      );
   }

   closeDetails = (closeDets) => {
      this.setState ({
         isDetailVisible: !closeDets
      })
   }
      
   componentDidMount() {
      const app = document.getElementsByClassName("App")[0];
      const body = document.querySelector("body");
      app.style.background = "#fcfcfc";
      app.style.height = "auto";
      app.style.color = "#0d0d0d";
      body.style.height = "auto";

      this.setState({isLoading: true});
      fetch("http://localhost:3001/albums")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState(
                  {
                     isLoading: false, 
                     albums: result
                  }
               );
            },
            (error) => {
               this.setState(
                  {
                     isLoading: false, 
                     errorInfo: error
                  }
               );
            }
         );
   }

   render() {
      const { isLoading, errorInfo } = this.state;
      const loadingStyle = {
         textAlign: "center",
         fontSize: "1.5rem"
      };

      return(
         <Container fluid>
            <Row className="align-items-center justify-content-between">
               <Col>
                  <h1 className="album-collection-title">My Album Collection</h1>
               </Col>
               <Col sm="auto">
                  <Button aria-label="Add album">
                     <FontAwesomeIcon icon={faPlus} /><span className="add-btn-title">Add album</span>
                  </Button>
               </Col>
               <Col lg="auto">
                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button>Search</Button>
                  </Form>
               </Col>
            </Row>
               {
                  this.state.isDetailVisible ?
                  (<Row>
                     <Col lg={8}>
                        <Row>
                        {
                           isLoading ? 
                              <div>
                                 <p style={loadingStyle}>Loading...</p>
                              </div> : 
                              errorInfo ? <Col>Error: {errorInfo.message}</Col> : 
                              (<AlbumCollection albumDetails={this.state.albums} showDetails={this.handleDetails} />)
                        }
                        </Row>
                     </Col>
                     <Col lg={4} className="album-details">
                        <AlbumDetails albumDets={this.state.albumDetails} imageLink={this.state.albumDetails.albumArtUrl} hideDets={this.closeDetails} />
                     </Col>
                  </Row>   
                  ) :
                  (<Row>
                     <Col lg={12}>
                        <Row>
                        {
                           isLoading ? <div>Loading...</div> : 
                           errorInfo ? <div>Error: {errorInfo.message}</div> : 
                           (<AlbumCollection albumDetails={this.state.albums} showDetails={this.handleDetails} />)
                        }
                        </Row>
                     </Col>
                  </Row>)
               }
         </Container>
      );
   }
}