import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Carousel from 'react-elastic-carousel';

const breakPoints =[
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 960, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

function Cards() {
  return (
    <>
    <div className='cards'>
      <h1 className='cards-h1'>Events!</h1>
      <h3 className='cards-h3'>Join us to experience Singaporean culture through celebrating national festivals, activities, and socials!</h3>
      <div className='cards__container'>
        <Carousel breakPoints={breakPoints}>
            <CardItem
              src='images/msn2022.JPG'
              text='Malaysia Singapore Night 2022'
              label='2022'
              path='https://www.instagram.com/p/CbmApL3OYq4/'
            />
            <CardItem
              src='images/cnygames2022.jpg'
              text='CNY Games Night 2022'
              label='2022'
              path='https://www.instagram.com/p/Cat6PFDLaqr/'
            />
            <CardItem
              src='images/cny22.jpg'
              text='Caligraphy and Trivia Night 2022'
              label='2022'
              path='https://www.instagram.com/p/CZvWaqXFZpt/'
            />
            <CardItem
              src='images/deep21.jpg'
              text='Deepavali 2021'
              label='2021'
              path='https://www.instagram.com/p/CWFS_jNjhyz/'
            />
            <CardItem
              src='images/ice21yuh.jpg'
              text='Ice Breaker 2021'
              label='2021'
              path='https://www.instagram.com/p/CT5-XQjlyHB/'
            />
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Cards;
