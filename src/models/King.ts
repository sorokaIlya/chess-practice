import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class King extends Figure{

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-king`;
        super(color, pathFigure);
    }

    canMove(): boolean {
        return true;
    }

    move(): void {
        return;
    }

}