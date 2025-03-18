import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Carousel from 'react-elastic-carousel';

const breakPoints =[
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2, itemsToScroll:2},
  { width: 768, itemsToShow: 3, itemsToScroll:3},
  { width: 1200, itemsToShow: 3, itemsToScroll:3},
  { width: 1450, itemsToShow: 5, itemsToScroll:5},
  { width: 1750, itemsToShow: 6, itemsToScroll:6},
]

function Cards() {
  return (
    <>
    <div className='cards' id="events" >
      <h1 className='cards-h1' data-aos="fade-up">Events</h1>
      <h3 className='cards-h3' data-aos="fade-up" data-aos-duration="2800">Join us to experience Singaporean culture through celebrating national festivals, activities, and socials!</h3>
      <div className='cards__container' data-aos="fade-up" data-aos-duration="3200">
        <Carousel breakPoints={breakPoints}>
            <CardItem
              src='images/event_photos/msn2024.jpg'
              text='MSN'
              label='2024'
              path='https://www.instagram.com/p/C4rTNanPamg/?img_index=1'
            />
            <CardItem
              src='images/event_photos/games2024.png'
              text='Games Night'
              label='2024'
              path='https://www.instagram.com/p/C4UPJCLSlaW/?img_index=1'
            />
            <CardItem
              src='images/event_photos/CNY2024.png'
              text='CNY'
              label='2024'
              path='https://www.instagram.com/p/C28y7tJrgY_/?img_index=1'
            />
            <CardItem
              src='images/event_photos/tos22.png'
              text='Taste of SEA'
              label='2023'
              path='https://www.instagram.com/p/C0ad-qvLb-E/?img_index=1'
            />
            <CardItem
              src='images/event_photos/deep22.png'
              text='Deepavali'
              label='2023'
              path='https://www.instagram.com/p/CzfYaKer0to/?img_index=1'
            />
            <CardItem
              src='images/event_photos/icebreaker23.png'
              text='Ice Breaker'
              label='2023'
              path='https://www.instagram.com/p/Cx9MuaYPTeA/?img_index=1'
            />
            <CardItem
              src='images/event_photos/msn23.png'
              text='MSN'
              label='2023'
              path='https://www.instagram.com/p/CqPTP3yOgmq/?img_index=1'
            />
            <CardItem
              src='images/event_photos/games23.png'
              text='Games Night'
              label='2023'
              path='https://www.instagram.com/p/CqJzDQSp3ZO/?img_index=1'
            />
            <CardItem
              src='images/event_photos/cny23.png'
              text='CNY'
              label='2023'
              path='https://www.instagram.com/p/CoEVpUCuGsr/?img_index=1'
            />
            <CardItem
              src='images/event_photos/tos23.png'
              text='Taste of SEA'
              label='2022'
              path='https://www.instagram.com/p/ClflXq7uCU_/?img_index=1'
            />
            <CardItem
              src='images/event_photos/deep23.png'
              text='Deepavali'
              label='2022'
              path='https://www.instagram.com/p/CkPymJqO5ni/?img_index=1'
            />
            <CardItem
              src='images/event_photos/ice22.png'
              text='Ice Breaker'
              label='2022'
              path='https://www.instagram.com/p/CjedJ0FLXKZ/?img_index=1'
            />
            <CardItem
              src='images/event_photos/lasert2022.jpg'
              text='Laser Tag Social'
              label='2022'
              path='/'
            />
            <CardItem
              src='images/event_photos/msn2022.JPG'
              text='MSN'
              label='2022'
              path='https://www.instagram.com/p/CbmApL3OYq4/'
            />
            <CardItem
              src='images/event_photos/cnygames2022.jpg'
              text='CNY Games Night'
              label='2022'
              path='https://www.instagram.com/p/Cat6PFDLaqr/'
            />
            <CardItem
              src='images/event_photos/cny22.jpg'
              text='Caligraphy Night'
              label='2022'
              path='https://www.instagram.com/p/CZvWaqXFZpt/'
            />
            <CardItem
              src='images/event_photos/tasteofsea.jpg'
              text='Taste of SEA'
              label='2021'
              path='https://www.instagram.com/p/CWzpXourvQ1/'
            />
            <CardItem
              src='images/event_photos/deep21.jpg'
              text='Deepavali'
              label='2021'
              path='https://www.instagram.com/p/CWFS_jNjhyz/'
            />
            <CardItem
              src='images/event_photos/social2021.png'
              text='A bunch of socials!'
              label='2021'
              path='https://www.instagram.com/p/CVl_V7dpWbs/'
            />
            <CardItem
              src='images/event_photos/ice21yuh.jpg'
              text='Ice Breaker'
              label='2021'
              path='https://www.instagram.com/p/CT5-XQjlyHB/'
            />
        </Carousel>
      </div>
      <div className='upcoming__container' data-aos="flip-left" data-aos-duration="2800">
        <h1 className='upcoming-h1' data-aos="fade-up">Our <span className='up'>Upcoming</span> Event:</h1>
            <CardItem
              src='images/event_photos/msn23.png' // change photo
              text='RSVP Now!'
              label='2025'
              path='https://docs.google.com/forms/d/e/1FAIpQLSfoeILK-e_6PFtA_1T1hafrjSiF6I6CRXmGXFRmt6JDGRRTpQ/viewform' // add rspv link here
              className='upcoming-event'
            />
      </div>
    </div>
    </>
  );
}

export default Cards;
