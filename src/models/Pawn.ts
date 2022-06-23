import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class Pawn extends Figure{

    constructor(color: ChessEnum) {
        const iconFigure = `${color}-pawn`
        super(color, iconFigure);
    }

    canMove(): boolean {
        return false;
    }

}