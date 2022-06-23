import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class Queen extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-queen`;
        super(color, pathFigure);
    }

    canMove(): boolean {
        return true;
    }

    move(): void {
        return;
    }

}