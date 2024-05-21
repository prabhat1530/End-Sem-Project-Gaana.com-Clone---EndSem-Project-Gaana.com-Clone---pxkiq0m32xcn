import React, { useState } from 'react';

const SongTile = ({ song, handlePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    handlePlay(song._id);
  };

  return (
    <div className="p-4">
      <img src={song.thumbnail} alt={song.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold truncate">{song.title}</h3>
      <p className="text-sm text-gray-500 truncate">{song.artist.map((artist) => artist.name).join(', ')}</p>
      <button
        onClick={togglePlay}
        className="mt-2 p-2 bg-blue-500 text-white rounded-full"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default SongTile;
