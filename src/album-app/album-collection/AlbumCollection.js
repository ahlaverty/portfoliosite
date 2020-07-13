import React from 'react';
import { Col } from 'react-bootstrap';
import Album from '../album/Album';

import './album-collection.css';

export default class AlbumCollection extends React.Component {
   constructor(props) {
      super(props);
      this.handleAlbumClick = this.handleAlbumClick.bind(this);

      this.state = {
         wasClicked: false
      }
   }
   
   handleAlbumClick(isClicked, albumInformation) {
      this.props.showDetails(isClicked, albumInformation);
      this.setState({
         wasClicked: isClicked
      });
   }
   
   render() {
      const albums = this.props.albumDetails;
      const showClicked = this.state.wasClicked;
      return(
         albums.map(a => 
            <React.Fragment key={a.id}>
               {
                  showClicked ? 
                  (<Col className="AlbumCol" lg={4}>
                     <Album albumInfo={a} imageUrl={a.albumArtUrl} onDisplayDetails={this.handleAlbumClick} />
                  </Col>) :
                  (<Col className="AlbumCol" lg={4}>
                  <Album albumInfo={a} imageUrl={a.albumArtUrl} onDisplayDetails={this.handleAlbumClick} />
                  </Col>)
               }
            </React.Fragment>
         )
      )
   }
} 
