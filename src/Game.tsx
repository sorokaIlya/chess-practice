import React from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent";

function Game() {
    // const table = new Table();
    return (
        <div className={'app'}>
            <BoardComponent/>
        </div>
    );
}

export default Game;
