import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './BoardForm.css';



const kNewBoardData = {
    title: '',
    owner: '',

};

const NewBoardForm = ({onAddBoardCallback}) => {
    const [boardData, setBoardData] = useState(kNewBoardData);

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value; 


        setBoardData(oldData => ({...oldData, [fieldName]: value})); 

    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!boardData.title){return; }

    }

    setBoardData(kNewBoardData); 

    onAddBoardCallback({
        ...boardData,
    })




    return (
        <form onSubmit={handleSubmit} className='new-board-form'> 
            <section>
                <h2>Create New Board</h2>
                    <div className='new-board_fields'>
                        <label htmlFor="new-board_title">Title</label>
                        <input
                            name="title"
                            id='new-board__title'
                            value={boardData.title}
                            onChange={handleChange}
                        />


                        <label htmlFor="new-board__owner">Owner</label>
                        <input
                            name="owner"
                            id="owner"
                            value={boardData.owner}
                            onChange={handleChange}
                        />

                        <button className="button-new-board-submit" type="submit">
                            Add Board
                        </button>
                    </div>
            </section>
        
        </form>
    );
 }; 




NewBoardForm.propTypes = {
    onAddBoardCallback : PropTypes.func.isRequired,

}


export default NewBoardForm;