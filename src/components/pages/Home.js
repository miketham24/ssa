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
        title="NEXT EVENT: Sleigh with SSA (Nov 29th 7-9:30pm)"
        subtitle="Join us in making gingerbread houses, taking festive pictures at the Photo Booth, and watching christmas movies with Hot milo and marshmallows!!"
        link="" 
        imageSource='images/event_photos/iceb23.png' // change photo
        buttonText="Register :D"
        daysToLive={1}
        secondsBeforeBannerShows={3}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
        onBannerClick={() => {
          window.open('https://www.jotform.com/243187399700262'); // add rsvp link here
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
