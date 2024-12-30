import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
import Women from './Women';
import Video from './Video';
import Cards2 from './Cards2';
import Contact from './Contact';
import Women2 from './Women2';
import Payment from './Payment';

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Cards />
        <Cards2 />
        <Women />
        <Women2 />
        <Contact />
        <Video />
        <Footer />
    </>
  )
}

export default Home;
