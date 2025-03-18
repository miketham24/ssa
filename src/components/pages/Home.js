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
        title="NEXT EVENT: Malaysia Singapore Night (Mar 19th 6:30-9:30pm)"
        subtitle="Join us to celebrate Singaporean and Malaysian culture!"
        link="" 
        imageSource='images/event_photos/msn23.png' // change photo
        buttonText="RSVP!"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://docs.google.com/forms/d/e/1FAIpQLSfoeILK-e_6PFtA_1T1hafrjSiF6I6CRXmGXFRmt6JDGRRTpQ/viewform'); // add rsvp link here
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
