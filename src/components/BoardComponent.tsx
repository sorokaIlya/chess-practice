import React, {useCallback, useMemo, useState} from "react";
import {CellComponent} from "./CellComponent";
import {Spot} from "../models/Spot";
import {Game} from "../models/Game";

export const BoardComponent = () => {

    const {chessBoard: board, game} = useMemo(() => {
        const game = new Game();
        const {chessBoard} = game;
        return {chessBoard, game};
    }, []);

    const [spot, setSpot] = useState<object | null>(null);

    const selectFigure = useCallback((cell: Spot) => {
        if (cell.figure && game.isPlayerTurn(cell.figure)) {
            board.selectFigure(cell)
            setSpot(cell);
        }
    }, []);

    const moveFigure = useCallback((next: Spot) => {
        game.resolveGame(next);
        setSpot(next);
    }, []);

    const handleBackMove = () => {
        game.backProgress();
        setSpot({...spot});
    }

    return (
        <div className={'board'}>
            <button className="prev-move" onClick={handleBackMove}>Back</button>
            {board.getSells.map((cellRow, ind) =>
                <React.Fragment key={ind}>
                    {cellRow.map(cell =>
                        <CellComponent key={`${cell.x}-${cell.y}`} cell={cell}
                                       pasteFigure={moveFigure}
                                       onSelect={selectFigure}/>
                    )}
                </React.Fragment>)
            }
        </div>
    )
}