// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './carousel';

const HomePage = ({ isAuthenticated }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await axios.get('https://academics.newtonschool.co/api/v1/musicx/song?limit=30&featured=Trending%20songs', {
        headers: {
          projectID: 'bng7dtu7whwk',
        },
      });
      setSongs(result.data.data);
    };

    fetchSongs();
  }, []);

  const handlePlay = (songId) => {
    if (!isAuthenticated) {
      alert('Please log in to play songs.');
      return;
    }
    const audio = new Audio(`https://academics.newtonschool.co/api/v1/musicx/song/${songId}/play`);
    audio.play();
  };

  return (
    <div className="mt-16 p-4">
      <Carousel songs={songs} handlePlay={handlePlay} />
    </div>
  );
};

export default HomePage;

