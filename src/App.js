// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';



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
  return (
    <div className="App">
      <h1>board</h1>
      <Board 
        props = {Data[0]}/>
    </div>
  );
};

export default App;
