import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Queen extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-queen`;
        super(color, pathFigure);
    }

    canMove(currentSpot: Spot, possibleSpot: Spot) {
        return true;
    }



    move(): void {
        return;
    }

}