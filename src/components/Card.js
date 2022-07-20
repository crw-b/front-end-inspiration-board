import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({card_id, message, likes_count, increaseLikes}) => {

  const handleLikeButton = () => {
    increaseLikes(card_id);
  }; 




  return (
    <div className='card'>
      <ul>
          <li className='card_message'>{message}</li>
          <li>{likes_count} likes</li>
          <button className='likes_button' onClick={handleLikeButton}>Like</button>
      </ul>
    </div>
  )
}

Card.propTypes = {
  
      card_id: PropTypes.number,
      message: PropTypes.string,
      likes: PropTypes.number,
      increaseLikes : PropTypes.func,

  
  };


export default Card;