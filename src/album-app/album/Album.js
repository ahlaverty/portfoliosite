import React from 'react';
//import AlbumList from '../album-list/AlumbList';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class Album extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onDisplayDetails(true, this.props.albumInfo);
    }

    render() {
        const imageLink = this.props.imageUrl;
        const albumId = this.props.albumInfo.id;
        const albumTitle = this.props.albumInfo.albumTitle;
        const artist = this.props.albumInfo.artist;

        return (
            <Card className="h-100">
                <Card.Img variant="top" src={require('../images' + imageLink)} key={albumId} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{albumTitle}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">{artist}</Card.Subtitle>
                    <Button className="text-right d-flex align-items-center align-self-end mt-auto" variant="primary" onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faInfoCircle} /><span className="button-text">More Info</span>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Album;