// src/components/Carousel.js
import React from 'react';
import SongTile from './songtitele';

const Carousel = ({ songs, handlePlay }) => {
  return (
    <div className="relative">
      <div className="flex overflow-x-scroll space-x-4 p-4">
        {songs.map((song) => (
          <SongTile key={song._id} song={song} handlePlay={handlePlay} />
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        {'<'}
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
