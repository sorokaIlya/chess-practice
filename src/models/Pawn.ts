import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Pawn extends Figure {

    private isFirstStep = true;

    constructor(color: ChessEnum) {
        const iconFigure = `${color}-pawn`
        super(color, iconFigure);
    }

    canMove(startSpot: Spot, possibleSpot: Spot) {
        const rangeStep = this.isFirstStep ? 2 : 1;
        const currentFigure = startSpot.figure;
        if (currentFigure) {
            if(possibleSpot.figure?.color == currentFigure.color) return false;
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
                if (possibleSpot.y === startSpot.y && !possibleSpot.figure) {
                    if ((startSpot.x - 1 === possibleSpot.x) || (startSpot.x - rangeStep === possibleSpot.x)) {
                        return true;
                    }
                }
            } else if (currentFigure.color === 'black') {
                if (possibleSpot.y === startSpot.y && !possibleSpot.figure) {
                    if ((startSpot.x + 1 === possibleSpot.x) || (startSpot.x + rangeStep === possibleSpot.x)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    removeFirstDistance() {
        this.isFirstStep = false;
    }

}