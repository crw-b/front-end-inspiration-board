import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './BoardForm.css';

const NewBoardForm = ({onAddBoardCallback}) => {
    const [boardData, setBoardData] = useState({
    "title": '',
    "owner": ''
    });

    const submitBoardData = (e) => {
    e.preventDefault();

    onAddBoardCallback({
        "title":boardData.title,
        "owner":boardData.owner
    });
    setBoardData({ "title": boardData.title, "owner": boardData.owner});
    };

    const handleTitleChange = (e) => {
        setBoardData(boardData["title"] = e.target.value);
    };

    const handleOwnerChange = (e) => {
        setBoardData(boardData["owner"] = e.target.value);
    };

    return (
    <form onSubmit={submitBoardData} className="new-board-form">
        <section>
            <h2>Add a Board</h2>
            <div className="new-card-fields">
                <label htmlFor="title">Title</label>
                <input
                name="title"
                id="title"
                value={boardData.title}
                onChange={handleTitleChange}
                />
                <label htmlFor="owner">Owner</label>
                <input
                name="owner"
                id="owner"
                value={boardData.owner}
                onChange={handleOwnerChange}
                />
                <button className="button-new-board-submit" type="submit">
                Add Board
                </button>
            </div>
        </section>
    </form>
    );
};

// NewCardForm.propTypes = {
//     onAddTaskCallback: PropTypes.func.isRequired,
// };

export default NewBoardForm;