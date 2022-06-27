import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Rook extends Figure {

    constructor(color: ChessEnum) {
        const iconFigure = `${color}-rook`;
        super(color, iconFigure);
    }

    private collectHorizontal = []
    private collectVertical = []

    handleVertical(x: number) {
        if (x === 7) this.collectVertical = [];
    }

    handleHorizontal(y: number) {
        if (y === 7) this.collectHorizontal = [];
    }

    canMove(startSpot: Spot, possibleSpot: Spot) {
        const currentFigure = startSpot.figure;
        if (currentFigure) {
            if (startSpot.figure?.color === possibleSpot.figure?.color) return false;
            if (possibleSpot.figure?.color === currentFigure.color) return false;
            if (possibleSpot.figure?.color === 'white') {
                if (startSpot.x + 1 === possibleSpot.x && (startSpot.y - 1 === possibleSpot.y || startSpot.y + 1 === possibleSpot.y)) {
                    return true;
                }
            }
            if (possibleSpot.figure?.color === 'black') {
                if (startSpot.x - 1 === possibleSpot.x && (startSpot.y - 1 === possibleSpot.y || startSpot.y + 1 === possibleSpot.y)) {
                    return true;
                }
            }
            if (currentFigure.color === 'white') {
                if (possibleSpot.y === startSpot.y) {
                    if (startSpot.x - 1 === possibleSpot.x) {
                        return true;
                    }
                }
            } else if (currentFigure.color === 'black') {
                if (possibleSpot.y === startSpot.y) {
                    if (startSpot.x + 1 === possibleSpot.x) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

}