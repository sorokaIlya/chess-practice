import React from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent";

function Game() {
    return (
        <div className={'app'}>
            <BoardComponent/>
        </div>
    );
}

export default Game;
