// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NewCardForm from './components/Forms';

export const URL = 'https://bugbusters-back-end.herokuapp.com/boards';


function App() {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState('Loading...');
  const [currentBoard, setcurrentBoard] = useState({cards:[{board_id:0, card_id:0, message: "no cards on board", likes_count:0}], title:"No Board Selected"})

  useEffect(() => {
    axios 
      .get(URL)
      .then((res) =>{
        console.log(res.data);
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.board_id,
            title: board.title,
            owner: board.owner,
            cards: board.cards
          };
        });
        setBoards(newBoards);
        console.log(newBoards)
        setStatus('Loaded');
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const options = []
    for (const board of boards){
      let option = {value: board.board_id, label: board.title}
      options.push(option);
    };

  const changeBoard = (selectedOption) => {
    console.log(selectedOption);
    axios
      .get(URL + '/' + selectedOption.value + '/cards')
      .then((res) => {
        setcurrentBoard(res.data);
      });
  };

  return (
    <div className="App">
      <span className='header'>
        <h1>Bug Busters' Board:</h1>
        <h2>{currentBoard.title}</h2>
      </span> 
      <div className='board-select'>
        <Dropdown options={options} placeholder="Select a board" onChange={(e) => changeBoard(e)}/>
      </div>
      <div className='form'>
        <NewCardForm className='form'/>
      </div>
      <Board className='card' cards={currentBoard.cards}/>
    </div>
  );
};

export default App;
