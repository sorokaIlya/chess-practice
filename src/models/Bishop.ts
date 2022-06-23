import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class Bishop extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-bishop`;
        super(color, pathFigure);
    }

    canMove(): boolean {
        return true;
    }

    move(): void {
        return;
    }

}