import React from 'react';

import { Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from ''

const AddSongs = (props) => {
  return (
     props.songs.map((val, indx) => {
         let trackId = `track-${indx}`, trackTitleId = `trackTitle-${indx}`, lengthId = `lengthId-${indx}`

         return(
            <Form.Row key={indx}>
               <Col lg={2}>
                  <Form.Label htmlFor={trackId}>Track Number</Form.Label>
                  <Form.Control 
                     type="number"
                     name={trackId}
                     data-id={indx}
                     id={trackId} 
                     value={indx + 1} />
               </Col>
               <Col lg={6}>
                  <Form.Label htmlFor={trackTitleId}>Track Title</Form.Label>
                  <Form.Control 
                     type="text"
                     name={trackTitleId}
                     data-id={indx}
                     id={trackTitleId}
                     value={props.songs[indx].trackTitleId} />
               </Col>
               <Col>
                  <Form.Label>Song Length</Form.Label>
                  <Form.Control 
                     type="text" 
                     name={lengthId}
                     data-id={indx}
                     id={lengthId}
                     value={props.songs[indx].lengthId} />
               </Col>
               <Col sm="auto" className="d-flex flex-column add-button-col">
                  <Form.Label className="invisible">Add</Form.Label>
                  <Button variant="primary" className="d-block">
                     <FontAwesomeIcon icon={faPlus} />
                  </Button>
               </Col>
            </Form.Row>
         )
      })
   )
}

export default AddSongs;