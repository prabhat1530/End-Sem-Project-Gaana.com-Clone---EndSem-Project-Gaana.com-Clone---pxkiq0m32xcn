import React from 'react';
import MyCarousel from './MyCarousel';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className=' bg-black'>
      <Navbar />
      <MyCarousel 
        title="Trending Songs" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs" 
      />
      <MyCarousel 
        title="Romantic" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic" 
      />
      <MyCarousel 
        title="Happy" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?mood=happy" 
      />
      <MyCarousel 
        title="Excited" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?mood=excited" 
      />
      <MyCarousel 
        title="Sad" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?mood=sad" 
      />
      <MyCarousel 
        title="Top 20 of this week" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?featured=Top+20+of+this+week" 
      />
      <MyCarousel 
        title="Top 50 of this month" 
        api="https://academics.newtonschool.co/api/v1/musicx/song?featured=Top+50+of+this+month" 
      />
    </div>
  );
};

export default HomePage;
