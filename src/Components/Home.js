import React from 'react';
import MyCarousel from './carousel';
import Navbar from './navigationbar';
const HomePage = () => {
  return (
    <div className='mt-20 bg-black'>
      <Navbar/>
      <MyCarousel 
      
        title="Trending Songs " 
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
        api="https://academics.newtonschool.co/api/v1/musicx/song?top+20+the+week" 
      />
    </div>
  );
};

export default HomePage;
