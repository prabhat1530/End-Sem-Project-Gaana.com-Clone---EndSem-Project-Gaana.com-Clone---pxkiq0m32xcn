import React, { useEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const MyCarousel = ({ title, api }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(api, {
          headers: {
            projectId: "bng7dtu7whwk",
          }
        });
        const data = await response.json();
        setSongs(data.data || []);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, [api]);

  const songTemplate = (song) => {
    return (
      <div className="border-1 surface-border border-round m-2 py-5 px-3">
        <img src={song.thumbnail} alt={song.title} className="w-60 shadow rounded" />
        <h4 className="font-medium pt-3">{song.title}</h4>
      </div>
    );
  };

  return (
    <div className="bg-white m-10">
      <h1 className="font-semibold text-3xl pl-5 pt-5">{title}</h1>
      <Carousel value={songs} numVisible={6} numScroll={3} itemTemplate={songTemplate} />
    </div>
  );
};

export default MyCarousel;
