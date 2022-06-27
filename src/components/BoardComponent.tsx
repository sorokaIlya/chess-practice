import React, {useCallback, useMemo, useState} from "react";
import {CellComponent} from "./CellComponent";
import {Spot} from "../models/Spot";
import {Game} from "../models/Game";

export const BoardComponent = () => {

    const {board, game} = useMemo(() => {
        const game = new Game();
        const board = game.chessBoard;
        return {board, game};
    }, []);

    const [, setSpot] = useState<Spot | null>(null);
    // const selectMemo = useCallback((spot:Spot)=>{
    //     console.log({x:spot.x,y:spot.y})
    // },[])

    const selectFigure = (cell: Spot) => {
        board.selectFigure(cell)
        setSpot(cell);
    }

    const moveFigure = (next: Spot) => {
        game.moveFigure(next);
        setSpot(next);
    }

    return (
        <div className={'board'}>
            {board.getSells.map((cellRow, ind) =>
                <React.Fragment key={ind}>
                    {cellRow.map(cell =>
                        <CellComponent key={`${cell.x}-${cell.y}`} cell={cell} pasteFigure={moveFigure}
                                       onSelect={selectFigure}/>)
                    }
                </React.Fragment>)
            }
        </div>
    )
}