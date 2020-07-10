import React from 'react';

import './song-list.css';

const AlbumList = (props) => {
   const songList = props.songsList;
   console.log(songList);
   const songListItems = songList.map(song =>             
      <li key={song.trackNum} className="d-flex justify-content-between">
         <div className="d-flex">
            <div className="song-track-number">{song.trackNum}</div>
            <div className="song-title">{song.title}</div>   
         </div> 
         <div className="song-length">{song.length}</div>
      </li>
   );

   return (
      <div className="song-list">
         <ul>{songListItems}</ul>
      </div>
   );
};

export default AlbumList;