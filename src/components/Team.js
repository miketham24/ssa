import React from 'react';
import './Team.css';
import TeamItem from './TeamItem';


function Team() {
  return (
    <div className='team-section' id="team">
      <h1 className='team-h1'>
        Our Team (2021/2022)</h1>
      <div className='cards__container' data-aos="zoom-in-left" data-aos-duration="3200">
        <ul className='cards__items'>
            <TeamItem
              src='images/keri.png'
              text='Keri Laoroekutai'
              role='President'
              path='/'
            />
            <TeamItem
              src='images/bella.jpg'
              text='Christabella Tan'
              role='Vice President'
              path='/'
            />
            <TeamItem
              src='images/alison.jpg'
              text='Alison Lin'
              role='Treasurer'
              path='/'
            />
            <TeamItem
              src='images/dom.jpg'
              text='Dominic Chua'
              role='Secetary'
              path='/'
            />
            <TeamItem
              src='images/steffi.jpg'
              text='Steffi Chang'
              role='Marketing Director'
              path='/'
            />
            </ul>
            <ul className='cards__items'>
            <TeamItem
              src='images/cris.jpg'
              text='Cristiana Bonifacio'
              role='Marketing Director'
              path='/'
            />
            <TeamItem
              src='images/josh.jpg'
              text='Joshua Teo'
              role='Logistics Director'
              path='/'
            />
            <TeamItem
              src='images/el.jpg'
              text='Elisabeth Chew'
              role='Logistics Director'
              path='/'
            />
            <TeamItem
              src='images/sarah.png'
              text='Sarah Ong'
              role='External Director'
              path='/'
            />
            <TeamItem
              src='images/ella.png'
              text='Ella Cheah'
              role='External Director'
              path='/'
            />
            </ul>
            <ul className='cards__items'>
            <TeamItem
              src='images/gauri.png'
              text='Gauri Gupta'
              role='Admin Director'
              path='/'
            />
            <TeamItem
              src='images/carissa.jpeg'
              text='Carissa Chua'
              role='Events Director'
              path='/'
            />
            <TeamItem
            src='images/mar.png'
            text='Mariena Teo'
            role='Events Director'
            path='/'
            />
            <TeamItem
              src='images/mike.jpg'
              text='Michael Tham'
              role='Events Coordinator'
              path='/'
            />
            <TeamItem
              src='images/kyle.png'
              text='Kyle Aazarae'
              role='Events Coordinator'
              path='/'
            />
            <TeamItem
              src='images/lizzy.png'
              text='Lizzie Ou'
              role='Graphic Designer'
              path='/'
            />
            </ul>
       </div>
       </div>
  );
}

export default Team;
