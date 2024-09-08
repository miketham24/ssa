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
        title="NEXT EVENT: Icebreaker (27th September 6-9pm)"
        subtitle="Engage in games, win prizes, and indulge in good food!"
        link="" // add rspv link here
        imageSource='images/event_photos/iceb23.png' // change photo
        buttonText="Register :D"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://form.jotform.com/242398144037054');
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
