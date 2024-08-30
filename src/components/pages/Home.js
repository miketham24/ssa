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
import { Analytics } from "@vercel/analytics/react"


function Home() {
  return (
    <>
    <Announcement
        title="NEXT EVENT: Destination UBC (6th September 7-9pm)"
        subtitle="All the info you need to have a great time at UBC!"
        link="https://forms.gle/vLtorurP4UfMZUsC9" // add rspv link here
        imageSource='images/event_photos/welcomebkbbq.jpeg' // change photo
        buttonText="Register :D"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://forms.gle/vLtorurP4UfMZUsC9');
        }
      }
      />
      <HeroSection />
      <Analytics />
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
