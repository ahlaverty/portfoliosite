import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import AlbumCollection from './album-collection/AlbumCollection';

import './album-app.css';
import AlbumDetails from './album-details/AlbumDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddAlbum from './add-album/AddAlbum';

export default class AlbumApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleAddAlbum = this.handleAddAlbum.bind(this);
      this.updateSearchTerm = this.updateSearchTerm.bind(this);
      this.handleDetails = this.handleDetails.bind(this);
      this.state = {
         isDetailVisible: false,
         albums: [],
         errorInfo: null,
         isLoading: false,
         albumDetails: null,
         searchTerm: "",
         isAddFormVisible: false
      }
   }

   handleAddAlbum() {
      this.setState({isAddFormVisible: true}, () => {

         console.log(this.state.isAddFormVisible);
      }
      );
   }

   updateSearchTerm = (event) =>{
      let keyword = event.target.value;
      this.setState({searchTerm: keyword.toString().toLowerCase()});
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
      const { isLoading, errorInfo, searchTerm, isAddFormVisible, isDetailVisible } = this.state;
      const loadingStyle = {
         textAlign: "center",
         fontSize: "1.5rem"
      };
      let content;

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

      if(isDetailVisible && !isAddFormVisible) {
         content = <Row>
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
         </Row>;
      } else if (!isDetailVisible && !isAddFormVisible) {
         content = <Row>
                     <Col lg={12} className="content-change">
                        <Row>
                        {
                           isLoading ? <div>Loading...</div> : 
                           errorInfo ? <div>Error: {errorInfo.message}</div> : 
                           (<AlbumCollection albumDetails={this.state.albums} showDetails={this.handleDetails} />)
                        }
                        </Row>
                     </Col>
                  </Row>;
      } else if (!isDetailVisible && isAddFormVisible) {
         content = <AddAlbum />;
      }

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
                           <FontAwesomeIcon icon={faPlus} /><span className="add-btn-title" onClick={this.handleAddAlbum}>Add album</span>
                        </Button>
                     </Col>
                     <Col sm="auto">
                        <Form inline>
                           <FormControl type="text" placeholder="Search" className="search-bar" onChange={(e) => this.updateSearchTerm(e)} />
                        </Form>
                     </Col>
                  </Row>
               </Col>
            </Row>
            {content}
         </Container>
      );
   }
}