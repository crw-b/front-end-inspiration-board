import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({key, message, likes_count}) => {
  const increaseLikes = (card) => {
    const updatedCard = {
      key: card.key,
      message: card.message,
      likesCount: card.likes_count += 1
    };
    card.onUpdate(updatedCard);
  };

  return (
    <div className='card'>
      <ul>
          <li className='card_message'>{message}</li>
          <li>{likes_count} likes</li>
          <button className='likes_button' onClick={() => likes_count += 1}>Like</button>
      </ul>
    </div>
  )
}

// Card.propTypes = {
//     props: PropTypes.arrayOf(
//       PropTypes.shape({
//         key: PropTypes.number,
//         message: PropTypes.string,
//         likes: PropTypes.number,
//       })
//     ).isRequired,
//   };


export default Card;