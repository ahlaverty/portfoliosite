import React from 'react';
import { Container, Row, Col, Form, FormControl, Button, Modal } from 'react-bootstrap';
import AlbumCollection from './album-collection/AlbumCollection';

import './album-app.css';
import AlbumDetails from './album-details/AlbumDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

export default class AlbumApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleShowModal = this.handleShowModal.bind(this);
      this.addAlbum = this.addAlbum.bind(this);
      this.updateSearchTerm = this.updateSearchTerm.bind(this);
      this.performSearch = this.performSearch.bind(this);
      this.handleDetails = this.handleDetails.bind(this);
      this.state = {
         isDetailVisible: false,
         albums: [],
         errorInfo: null,
         isLoading: false,
         albumDetails: null,
         searchTerm: "",
         doSearch: false,
         show: false
      }
   }

   handleCloseModal() {
      this.setState({show: false});
   }

   handleShowModal() {
      this.setState({show: true});
   }

   addAlbum(){

   }

   updateSearchTerm = (event) =>{
      let keyword = event.target.value;
      this.setState({searchTerm: keyword.toString().toLowerCase()});
   }

   performSearch(event, executeSearch) {
      event.preventDefault();
      this.setState({doSearch: executeSearch});
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
      app.style.color = "#0d0d0d !important";
      body.style.height = "auto";

      this.setState({
         isLoading: true, 
      });

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
      const { isLoading, errorInfo, searchTerm } = this.state;
      const loadingStyle = {
         textAlign: "center",
         fontSize: "1.5rem"
      };

      const filteredAlbums = this.state.albums.filter(function(data){
         if(searchTerm === null || searchTerm === undefined)
            return data
         else if(data.albumTitle.toLowerCase().includes(searchTerm) || 
                  data.artist.toLowerCase().includes(searchTerm)){
            return data
         }
         this.setState({albums: filteredAlbums});
         
         return data;
      });
      
      console.log(filteredAlbums);

      return(
         <Container fluid>
            <Row className="align-items-center justify-content-between">
               <Col sm={6} lg={6}>
                  <h1 className="album-collection-title">My Album Collection</h1>
               </Col>
               <Col sm={6} lg={6}>
                  <Row className="justify-content-end mt-sm-5 mt-lg-0 align-items-center">
                     <Col sm="auto">
                        <Button aria-label="Add album">
                           <FontAwesomeIcon icon={faPlus} /><span className="add-btn-title" onClick={this.handleShowModal}>Add album</span>
                        </Button>
                     </Col>
                     <Col sm="auto">
                        <Form inline>
                           <FormControl type="text" placeholder="Search" className="search-bar" onChange={(e) => this.updateSearchTerm(e)} />
                           <Button aria-label="Search" onClick={(event) => this.performSearch(event, true)}>
                              <FontAwesomeIcon icon={faSearch} />
                           </Button>
                        </Form>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Modal size="xl" show={this.state.show} onHide={this.handleCloseModal}>
               <Modal.Header closeButton>
                  <Modal.Title>Add album</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Form.Row>
                        <Col>
                           <Form.Label>Album Title</Form.Label>
                           <Form.Control type="text" placeholder="Enter the name of the album" />
                        </Col>
                        <Col>
                           <Form.Label>Artist/Band Name</Form.Label>
                           <Form.Control type="text" placeholder="Enter the name of the artist or band" />
                        </Col>
                     </Form.Row>
                     <Form.Row>
                        <Col>
                           <Form.Label>Songs</Form.Label>
                           <Form.Row>
                              <Col>
                                 <Form.Label>Track Number</Form.Label>
                                 <Form.Control type="number" placeholder="Enter the track number with no symbols" />
                              </Col>
                              <Col>
                                 <Form.Label>Track Title</Form.Label>
                                 <Form.Control type="text" placeholder="Enter the track title as it appears on the album" />
                              </Col>
                              <Col>
                                 <Form.Label>Song Length</Form.Label>
                                 <Form.Control type="text" placeholder="Enter the track length. Ex. 3:13" />
                              </Col>
                           </Form.Row>
                        </Col>
                     </Form.Row>
                     <Form.Row className="mt-3">
                        <Col>
                           <Form.File id="exampleFormControlFile1" label="Upload the album cover" />
                        </Col>
                     </Form.Row>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleCloseModal}>Cancel</Button>
                  <Button variant="primary">Save</Button>
               </Modal.Footer>
            </Modal>
               {
                  this.state.isDetailVisible ?
                  (<Row>
                     <Col lg={8} className="content-change">
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
                     <Col lg={4} className="album-details content-change">
                        <AlbumDetails albumDets={this.state.albumDetails} imageLink={this.state.albumDetails.albumArtUrl} hideDets={this.closeDetails} />
                     </Col>
                  </Row>   
                  ) :
                  (<Row>
                     <Col lg={12} className="content-change">
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