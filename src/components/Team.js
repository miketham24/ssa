import React from 'react';
import './Team.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <section className='team'>
      <h1 className='team-heading'>
        Our Team (2021/2022)</h1>
        <div className='team-container'>
      <article className='team-member'>
        <div className='team-member-image'>
          <img src='images/team/team-member-1.jpg' alt='team-member-1' />
        </div>
          <div className='team-member-info'>
            <h4>Keri</h4>
            <p>President</p>
          </div>
          <div className='team-member-socials'>
          <Link
              target='_blank'
              aria-label='LinkedIn'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              target='_blank'
              aria-label='Instagram'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              target='_blank'
              aria-label='Discord'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-discord" />
            </Link>
          </div>
        </article>
        <article className='team-member'>
        <div className='team-member-image'>
          <img src='images/team/team-member-1.jpg' alt='team-member-1' />
        </div>
          <div className='team-member-info'>
            <h4>Christabella</h4>
            <p>Vice-President</p>
          </div>
          <div className='team-member-socials'>
          <Link
              target='_blank'
              aria-label='LinkedIn'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              target='_blank'
              aria-label='Instagram'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              target='_blank'
              aria-label='Discord'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/keri-kim-a8a8b817b/');
                }}
            >
              <i class="fab fa-discord" />
            </Link>
          </div>
        </article>    
    </div>
    </section>
  );
}

export default Team;
