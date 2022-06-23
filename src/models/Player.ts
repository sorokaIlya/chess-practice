import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";
import {Figure} from "./Figure";

export class Player {

    isWhitePlayer: boolean;

    constructor(color: ChessEnum) {
        this.isWhitePlayer = color === ChessEnum.WHITE
    }

    moveFigure(cellStart: Spot, cellEnd: Spot, figure:Figure): void {
        if (this.isWhitePlayer && figure.color === ChessEnum.WHITE){
            cellStart.figure = null;
        }
        if (!this.isWhitePlayer && figure.color === ChessEnum.BLACK){

        }
        return;
    }
}