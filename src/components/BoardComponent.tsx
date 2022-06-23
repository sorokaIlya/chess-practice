import React from "react";
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";

export const BoardComponent = () => {
    const board = new Board();
    return (
        <div className={'board'}>
            {board.getSells.map((cellRow, ind) =>
                <React.Fragment key={ind}>
                    {cellRow.map(cell =>
                        <CellComponent key={ind} cell={cell}/>)
                    }
                </React.Fragment>)
            }
        </div>
    )
}