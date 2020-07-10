import React from "react";
import { Row, Col } from 'react-bootstrap';

const AlbumDetails = (props) => {
   return ( 
      <div>
         <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
         <Row>
            <Col>
               <img src={props.imageUrl} alt={props.title} />
            </Col>
         </Row>
      </div>
   );
}

export default AlbumDetails;