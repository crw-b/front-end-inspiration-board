import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './Board.css';

const Board = ({cards, board_id, title, owner}) => {
    console.log(cards);
    const getCards = cards.map((card) => <Card 
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}/>
    );

    return (
        <div className='board-general'>
            <h2 className='board-title'>{title}</h2>
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