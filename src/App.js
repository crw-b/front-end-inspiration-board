// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NewCardForm from './components/Forms';


function App() {
  const Data = [
    {board_id:1, 
      title:"hello",
      owner:"bugbuster",
  
      cards: [{card_id:1, 
            message: "trying",
            likes_count:0}, 
            
            {card_id:2, 
            message:"again",
            likes_count:0}]
          }, 
    {board_id:2, 
      title:"good-bye",
      owner:"bugbuster 2",
  
      cards: [{card_id:3, 
            message: "gotta catch em all",
            likes_count:0}, 
            
            {card_id:4, 
            message:"pokemon",
            likes_count:0}]
          }]
  console.log(Data[0])
  const getBoards = Data.map((board) => <Board 
  board_id={board.board_id}
  cards={board.cards}
  title={board.title}
  owner={board.owner}/>
  );
  console.log(getBoards);

  // const Dropdown = ({getBoards}) => {
  //   return (
  //     <label>
  //       {getBoards.title}
  //       <select value={getBoards.board_id}>
  //         {getBoards.map((option) => (
  //           <option value={option.value}>{option.label}</option>
  //         ))}
  //       </select>
  //     </label>
  //   )
  // }



  const options = ['one', 'two']

  return (
    <div className="App">
      <p className='header'>
        <h1>Bug Busters' Board:</h1>
        <h2>Board Title</h2>
      </p> 
      <Dropdown className='board-select' options={options}/>
      <NewCardForm className='form'/>
      <div className='cards'>{getBoards}</div>
    </div>
  );
};

export default App;
