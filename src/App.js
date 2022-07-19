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
  const [boards, setboards] = useState([]);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios 
      .get(URL)
      .then((res) =>{
        setboards(res.data);
        console.log(boards)
      })

  },[])

  const options = []
    for (const board of boards){
      options.push(board.title)
    }

  return (
    <div className="App">
      <p className='header'>
        <h1>Bug Busters' Board:</h1>
        <h2>Board Title</h2>
      </p> 
      <Dropdown className='board-select' options={options}/>
      <NewCardForm className='form'/>
      <div className='cards'>{boards.cards}</div>
    </div>
  );
};

export default App;
