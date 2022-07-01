// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React from 'react'



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
  return (
    <div className="App">
      <h1>board</h1>
      <Board 
        board_id={Data[0]['board_id']}
        cards={Data[0]['cards']}
        title={Data[0]['title']}
        owner={Data[0]['owner']}
        />
    </div>
  );
};

export default App;
