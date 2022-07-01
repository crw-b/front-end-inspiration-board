import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './Board.css';

const Board = (props) => {
    const getCards = (cards) => {
        return props.cards.map((card)=> {
            return(<Card 
                card_id = {card.card_id} 
                message = {card.message} 
                // increaseLikes = {card.increaseLikes}
                likes_count = {card.likes_count}/>) 
            }
        )};   

    return <ul className='cards-list'>{getCards(props.cards)}</ul>;
}

Board.propTypes = {
    board_id: PropTypes.number,
    message: PropTypes.string, 
    increaseLikes: PropTypes.number, 
    likes_count: PropTypes.number,
}

export default Board;