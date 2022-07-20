import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './Board.css';

const Board = (props) => {
    console.log(props.cards);
    const getCards = props.cards.map((card) => {
        return (
        <Card 
            key={card.card_id}
            message={card.message}
            likes_count={card.likes_count}
        />
        );
    });

    return (
        <div className='board-general'>
            <ul className='cards-list'>{getCards}</ul>
        </div>);
}

Board.propTypes = {
    board_id: PropTypes.number,
    message: PropTypes.string, 
    increaseLikes: PropTypes.number, 
    likes_count: PropTypes.number,
}

export default Board;