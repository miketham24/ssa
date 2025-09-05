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
    {
    <Announcement
        title="NEXT EVENT: Destination UBC (Sept 5th 7:00-9:00pm)"
        subtitle="Join us for our introduction of UBC to you!"
        link="" 
        imageSource='images/event_photos/dest25.jpg' // change photo
        buttonText="RSVP!"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://form.jotform.com/252431416100238'); // add rsvp link here
        }
      }
      />
      }
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
