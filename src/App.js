// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NewCardForm from './components/CardForm';
import NewBoardForm from './components/BoardForm';

export const URL = 'https://bugbusters-back-end.herokuapp.com/boards';


function App() {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState('Loading...');
  const [currentBoard, setcurrentBoard] = useState({cards:[{board_id:0, card_id:0, message: "no cards on board", likes_count:0}]})
  const [currentTitle, setcurrentTitle] = useState({title:'NO BOARD SELECTED', board_id:0});
  const [formVisibility, setFormVisibility] = useState({cardForm: false, boardForm:false});

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

  const options = ["create new board"]
    for (const board of boards){
      let option = {value: board.board_id, label: board.title}
      options.push(option);
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

  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((res) => {
        console.log(res);
        const newBoard = {
          "board_id": res.data.board.board_id,
          "owner": res.data.board.owner,
          "title": res.data.board.title
        };
        setBoards([...boards, newBoard]);
      })
      // .catch((err) => console.log(err.response.data));
  };



  const changeBoard = (selectedOption) => {
    console.log(selectedOption.value);
    if (selectedOption.value === "create new board"){
      setFormVisibility({
        cardForm: false,
        boardForm: true,
      });
  
    } else {
      setFormVisibility({
        cardForm: true,
        boardForm: false,
      });

      axios
      .get(URL + '/' + selectedOption.value + '/cards')
      .then((res) => {
        setcurrentBoard(res.data);
      });
    }
  };


  const increaseLikes = (card_id) => {
    console.log(card_id);
    console.log(currentTitle.board_id);

   
    return axios.patch(URL + '/' + currentTitle.board_id + '/cards/' + card_id)
    .then(changeBoard({"value":currentTitle.board_id}));


  };

  const changeBoardTitle = (selectedOption) => {
    console.log(selectedOption.value);
    if (selectedOption.value !== "create new board") {
      const newBoardById = boards.filter((board) => board.board_id === selectedOption.value);
      console.log(newBoardById);
      console.log(newBoardById[0].title);
      setcurrentTitle(newBoardById[0]);
    }
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
      <div className='form' style={{display: formVisibility.cardForm ? 'block': 'none'}}>
        <NewCardForm onAddCardCallback={addCard} board_title={currentTitle.title}/> 
      </div>
      <div className='form' style={{display: formVisibility.boardForm ? 'block': 'none'}}>
        <NewBoardForm onAddBoardCallback={addBoard}/> 
      </div>
      <Board className='card' cards={currentBoard.cards}  increaseLikes={increaseLikes}/>
    </div>
  );
};

export default App;
