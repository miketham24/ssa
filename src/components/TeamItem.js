import React from 'react';
import { Link } from 'react-router-dom';

function TeamItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='team__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Team Member'
              src={props.src}
            />
          </figure>
          <div className='team-item-info'>
            <h3 className='cards__item__text'>{props.text}</h3>
            <h5 className='cards__item__role'>{props.role}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TeamItem;
