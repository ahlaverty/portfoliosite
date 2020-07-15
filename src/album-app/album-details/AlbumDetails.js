import React from "react";
import { Row, Col, Image} from 'react-bootstrap';

import SongList from '../song-list/SongList';

import "./albumdets.css";

export default class AlbumDetails extends React.Component {
   constructor(props) {
      super(props);
      this.closeDets = this.closeDets.bind(this);
   }
   
   closeDets() {
      this.props.hideDets(true);
   }
   
   render() {

      return ( 
         <React.Fragment className="content-change">
            <Row className="mb-3">
               <Col>
                  <button type="button" className="close" onClick={this.closeDets}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Image fluid src={require('../images' + this.props.imageLink)} alt={this.props.albumDets.title} />
               </Col>
               <Col lg={6} className="pl-0">
                  <h4 className="albumdets-title">{this.props.albumDets.albumTitle}</h4>
                  <p className="albumdets-artist">{this.props.albumDets.artist}</p>
                  <p className="albumdets-year">{this.props.albumDets.year}</p>
               </Col>
            </Row>
            <Row>
               <Col>
                  <SongList songs={this.props.albumDets.songs} />
               </Col>
            </Row>
         </React.Fragment>
      );
   }
}