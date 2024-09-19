import React, { useEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import SongTile from './SongTitle';

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
        <SongTile song={song} />
      </div>
    );
  };

  // Responsive settings for the carousel
  const responsiveOptions = [
    {
      breakpoint: '1024px', // for tablets and small laptops
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px', // for smaller tablets and large phones
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px', // for mobile phones
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="bg-black text-white m-10">
      <h1 className="font-semibold text-3xl pl-5 pt-5">{title}</h1>
      <Carousel 
        value={songs} 
        itemTemplate={songTemplate} 
        numVisible={5} 
        numScroll={3} 
        responsiveOptions={responsiveOptions} 
        circular 
        autoplayInterval={3000}
      />
    </div>
  );
};

export default MyCarousel;
