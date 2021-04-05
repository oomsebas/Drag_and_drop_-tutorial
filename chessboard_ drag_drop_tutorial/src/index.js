import { React } from 'react';
import ReactDOM from 'react-dom';
import Board from './App';
import { observe } from './components/Game';
const root = document.getElementById('root');

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
);
