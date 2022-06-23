import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";

export class Rook extends Figure{

    constructor(color: ChessEnum) {
        const iconFigure = `${color}-rook`;
        super(color, iconFigure);
    }

    canMove(): boolean {
        return false;
    }


}