import React from 'react';
//import AlbumList from '../album-list/AlumbList';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

class Album extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onDisplayDetails(e.target.value);
    }

    render() {
        const imageLink = this.props.imageUrl;
        const albumId = this.props.key;
        const albumTitle = this.props.albumInfo.albumTitle;
        const artist = this.props.albumInfo.artist;

        return (
            <Card className="h-100">
                <Card.Img variant="top" src={require('../images' + imageLink)} key={albumId} />
                <Card.Body>
                    <Card.Title>{albumTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{artist}</Card.Subtitle>
                    <div className="d-flex justify-content-end">
                        <Button className="text-right" variant="link" onClick={this.handleClick}>
                            <FontAwesomeIcon icon={faInfo} /> More Info
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }

}

export default Album;