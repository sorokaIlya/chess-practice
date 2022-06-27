import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Horse extends Figure {

    constructor(color: ChessEnum) {
        const pathFigure = `${color}-horse`;
        super(color, pathFigure);
    }

    canMove(cell: Spot, nextCell:Spot) {
        if(cell.figure?.color === nextCell.figure?.color) return false;
        if (cell.x - 1 === nextCell.x && cell.y - 2 === nextCell.y) return true;
        if (cell.x + 1 === nextCell.x && cell.y - 2 === nextCell.y) return true;
        if (cell.x + 1 === nextCell.x && cell.y + 2 === nextCell.y) return true;
        if (cell.x - 1 === nextCell.x && cell.y + 2 === nextCell.y) return true;
        if (cell.x - 2 === nextCell.x && cell.y + 1 === nextCell.y) return true;
        if (cell.x - 2 === nextCell.x && cell.y - 1 === nextCell.y) return true;
        if (cell.x + 2 === nextCell.x && cell.y - 1 === nextCell.y) return true;
        if (cell.x + 2 === nextCell.x && cell.y + 1 === nextCell.y) return true;
        return false;
    }


}