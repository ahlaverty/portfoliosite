import React from 'react';
import { Col } from 'react-bootstrap';
import Album from '../album/Album';

import './album-collection.css';

export default class AlbumCollection extends React.Component {
   constructor(props) {
      super(props);
      this.handleAlbumClick = this.handleAlbumClick.bind(this);

      this.state = {
         albums: [],
         errorInfo: null,
         isLoading: false,
      };
   }

   handleAlbumClick(event) {
      this.props.showDetails(event.target.value);
   }

   componentDidMount() {
      this.setState({isLoading: true});
      fetch("http://localhost:3001/albums")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({isLoading: false, albums: result});
            },
            (error) => {
               this.setState({isLoading: false,errorInfo: error});
            }
         );
   }
   
   render() {
      const { albums, isLoading, errorInfo } = this.state;
      return(
         <>
            {
               isLoading ? <div>Loading...</div> : 
               errorInfo ? <div>Error: {errorInfo.message}</div> : 
               (albums.map(a => <Col className="AlbumCol" lg={3}><Album albumInfo={a} key={a.id} imageUrl={a.albumArtUrl} onDisplayDetails={this.handleAlbumClick} /></Col>))
            }
         </>
      )
   }
} 
