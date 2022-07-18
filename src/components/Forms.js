import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forms.css';

const NewCardForm = ({ onAddCardCallback }) => {
    const [cardData, setCardData] = useState({
    card_id: 0,
    message: '',
    likes_count: 0,
});

// what is THIS?
    const submitCardData = (e) => {
    e.preventDefault();

    onAddCardCallback({
    ...cardData,
    message: cardData.message === 'true',
    });
    setCardData({ message: '', likes_count: 0 });
    };

    const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    return (
    <form onSubmit={submitCardData} className="new-card-form">
        <section>
            <h2>Add a Card</h2>
            <div className="new-card-fields">
                <label htmlFor="message">Message</label>
                <input
                name="message"
                id="message"
                value={cardData.message}
                onChange={handleChange}
                />
                <button className="button-new-card-submit" type="submit">
                Add Card
                </button>
            </div>
        </section>
    </form>
    );
};

// NewCardForm.propTypes = {
//     onAddTaskCallback: PropTypes.func.isRequired,
// };

export default NewCardForm;