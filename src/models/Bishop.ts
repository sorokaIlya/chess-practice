import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Bishop extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-bishop`;
        super(color, pathFigure);
    }

    canMove(currentSpot: Spot, possibleSpot: Spot) {
        return false;
    }



    move(): void {
        return;
    }

}