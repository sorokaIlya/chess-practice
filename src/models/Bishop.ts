import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Bishop extends Figure {
    private possibleMoves: Spot[] = [];

    constructor(color: ChessEnum) {
        super(color, `${color}-bishop`);
    }

    canMove(currentSpot: Spot, possibleSpot: Spot) {
        return !!this.possibleMoves.find(cell => cell.x === possibleSpot.x && cell.y === possibleSpot.y);
    }

    private setDiagonalRight(x: number, y: number, cell: Spot[][]) {
        x--;
        y++
        while (x > -1 && y < 8) {
            if (cell[x][y].figure?.color === this.color) break;
            if (cell[x][y].figure) {
                this.possibleMoves.push(cell[x][y]);
                break
            }
            this.possibleMoves.push(cell[x][y]);
            x--;
            y++
        }
    }

    private setDiagonalLeft(x: number, y: number, cell: Spot[][]) {
        x--;
        y--;
        while (x > -1 && y > -1) {
            if (cell[x][y].figure?.color === this.color) break;
            if (cell[x][y].figure) {
                this.possibleMoves.push(cell[x][y]);
                break;
            }
            this.possibleMoves.push(cell[x][y]);
            x--;
            y--;
        }
    }

    private setDiagonalRightDown(x: number, y: number, cell: Spot[][]) {
        x++;
        y--;
        while (x < 8 && y > -1) {
            if (cell[x][y].figure?.color === this.color) break;
            if (cell[x][y].figure) {
                this.possibleMoves.push(cell[x][y]);
                break;
            }
            this.possibleMoves.push(cell[x][y]);
            x++;
            y--;
        }
    }

    private setDiagonalLeftDown(x: number, y: number, cell: Spot[][]) {
        x++;
        y++;
        while (x < 8 && y < 8) {
            if (cell[x][y].figure?.color === this.color) break;
            if (cell[x][y].figure) {
                this.possibleMoves.push(cell[x][y]);
                break;
            }
            this.possibleMoves.push(cell[x][y]);
            x++;
            y++;
        }
    }

    setDiagonalSpots(x: number, y: number, cells: Spot[][]) {
        this.possibleMoves = [];
        this.setDiagonalLeft(x, y, cells);
        this.setDiagonalLeftDown(x, y, cells);
        this.setDiagonalRight(x, y, cells);
        this.setDiagonalRightDown(x, y, cells);
    }


}