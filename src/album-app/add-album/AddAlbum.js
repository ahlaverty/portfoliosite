import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AddSongs from '../add-album/AddAlbum';

import './add-album.css';

export default class AddAlbum extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         albumTitle: "",
         artist: "",
         year: "",
         albumArtUrl: "",
         songs: [{trackNum: null, title: "", length: ""}]
      }
   }

   render() {
      let { albumTitle, artist, year, albumArtUrl, songs } = this.state;

      return(
         <Container className="add-album-container">
            <Row className="text-black">
               <Col sm={12}>
                  <h2 className="text-center">Add album</h2>
               </Col>
            </Row>
            <Row className="text-black">
               <Col>
                  <Form>
                     <Form.Group>
                        <Form.Label htmlFor="album title">Album Title</Form.Label>
                        <Form.Control 
                           type="text" 
                           name="album title" 
                           id="albumTitle" 
                           value={albumTitle} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Artist/Band Name</Form.Label>
                        <Form.Control 
                           type="text"
                           name="artist"
                           id="artist"
                           value={artist} />
                     </Form.Group>
                     <Form.Group>
                        <Form.Label htmlFor="year">Year</Form.Label>
                        <Form.Control 
                           type="text"
                           name="year"
                           id="year"
                           value={year} />
                     </Form.Group>
                     <Form.Group>
                           <h4>Songs</h4>
                           <Button onClick={this.addSong}>
                              <FontAwesomeIcon icon={faPlus} />
                              <span className="ml-3">Add song</span>
                           </Button>
                           <AddSongs songs={songs}/>
                     </Form.Group>
                     <Form.Row className="mt-3">
                        <Col>
                           <Form.File id="exampleFormControlFile1" label="Upload the album cover" />
                        </Col>
                     </Form.Row>
                  </Form>
               </Col>
            </Row>
         </Container>
      )
   }
}

