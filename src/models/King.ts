import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class King extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-king`;
        super(color, pathFigure);
    }

    canMove(currentSpot: Spot, nextSpot: Spot): boolean {
        return false;
    }



    move(): void {
        return;
    }

}