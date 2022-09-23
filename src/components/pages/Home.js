import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Team from '../Team';
import About from '../About';
import Whyus from '../Whyus';
import Partner from '../Partner';
import Footer from '../Footer';
import Ourstats from '../Ourstats';
import Announcement from "react-popup-announcement";


function Home() {
  return (
    <>
    <Announcement
        title="NEXT EVENT: SSA ICEBREAKER (30th SEPT 2022)"
        subtitle="Come meet other Singaporeans, eat some good FOOD, and have a great time!"
        link="https://forms.gle/LejsKADbA5BtM9z99"
        imageSource='images/ice21yuh.jpg'
        buttonText="Register :D"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://docs.google.com/forms/d/e/1FAIpQLSdyGPJvRHi3g9xOF1bGen5AFcMYq1tYsSC8FFcKGhklr4ArDg/viewform');
        }
      }
      />
      <HeroSection />
      <About />
      <Whyus />
      <Ourstats />
      <Cards />
      <Partner />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
