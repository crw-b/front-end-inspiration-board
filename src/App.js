// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NewCardForm from './components/CardForm';

export const URL = 'https://bugbusters-back-end.herokuapp.com/boards';


function App() {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState('Loading...');
  const [currentBoard, setcurrentBoard] = useState({cards:[{board_id:0, card_id:0, message: "no cards on board", likes_count:0}]})
  const [currentTitle, setcurrentTitle] = useState({title:'NO BOARD SELECTED', board_id:0});

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

  const changeBoardTitle = (selectedOption) => {
    console.log(selectedOption.value);
    const newBoardById = boards.filter((board) => board.board_id === selectedOption.value);
    console.log(newBoardById);
    console.log(newBoardById[0].title);
    setcurrentTitle(newBoardById[0]);
  };

  const addCard = (message) => {
    axios
      .post(URL + '/' + currentTitle.board_id + '/cards', message)
      .then((res) => {
        console.log(res);
        const newCard = {
          "message": res.data.message
        };
        setcurrentBoard({"cards":[...currentBoard.cards, newCard]});
        console.log(currentBoard);
      })
      // .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="App">
      <span className='header'>
        <h1>Bug Busters' Board:</h1>
        <h2>{currentTitle.title}</h2>
      </span> 
      <div className='board-select'>
        <Dropdown options={options} placeholder="Select a board" onChange={(e) => {changeBoard(e); changeBoardTitle(e)}}/>
      </div>
      <div className='form'>
        <NewCardForm className='form' onAddCardCallback={addCard}/>
      </div>
      <Board className='card' cards={currentBoard.cards}/>
    </div>
  );
};

export default App;
