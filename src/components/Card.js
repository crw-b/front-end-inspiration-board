import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
    return (
      <div className='card'>
        <ul>
            <li className='card_message'>{props.message}</li>
            <li>{props.likes}</li>
            <button className='likes_button' onClick={()=>props.increaseLikes(props.id)}></button>
        </ul>
      </div>
    )
}

Card.propTypes = {
    props: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number,
        message: PropTypes.string,
        likes: PropTypes.number,
      })
    ).isRequired,
    increaseLikes: PropTypes.func,
  };


export default Card;