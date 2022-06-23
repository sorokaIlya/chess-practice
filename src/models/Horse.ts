import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class Horse extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-horse`;
        super(color, pathFigure);
    }

    canMove(): boolean {
        return true;
    }

    move(): void {
        return;
    }

}