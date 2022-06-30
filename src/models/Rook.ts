import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export class Rook extends Figure {
    private possibleMoves: Spot[] = [];

    constructor(color: ChessEnum) {
        const iconFigure = `${color}-rook`;
        super(color, iconFigure);
    }

    private handleVerticalUp(x: number, y: number, cells: Spot[][]) {
        x++;
        while (x < 8) {
            if (cells[x][y].figure && cells[x][y].figure?.color === this.color) {
                break;
            }
            if (cells[x][y].figure) {
                this.setPossibleMoves(cells[x][y]);
                break;
            }
            this.setPossibleMoves(cells[x][y]);
            x++;
        }
    }

    private handleVerticalDown(x: number, y: number, cells: Spot[][]) {
        x--;
        while (x > -1) {
            if (cells[x][y].figure && cells[x][y].figure?.color === this.color) {
                break;
            }
            if (cells[x][y].figure) {
                this.setPossibleMoves(cells[x][y]);
                break;
            }
            this.setPossibleMoves(cells[x][y]);
            x--;
        }
    }

    private handleHorizontalLeft(x: number, y: number, cells: Spot[][]) {
        y--;
        while (y > -1) {
            if (cells[x][y].figure && cells[x][y].figure?.color === this.color) {
                break;
            }
            if (cells[x][y].figure) {
                this.setPossibleMoves(cells[x][y]);
                break;
            }
            this.setPossibleMoves(cells[x][y]);
            y--;
        }
    }

    private handleHorizontalRight(x: number, y: number, cells: Spot[][]) {
        y++;
        while (y < 8) {
            if (cells[x][y].figure?.color === this.color) {
                break;
            }
            if (cells[x][y].figure) {
                this.setPossibleMoves(cells[x][y]);
                break;
            }
            this.setPossibleMoves(cells[x][y]);
            y++;
        }
    }

    private setPossibleMoves(spot: Spot) {
        this.possibleMoves.push(spot);
    }

    setRookLines(x: number, y: number, cells: Spot[][]) {
        this.possibleMoves = [];
        this.handleHorizontalRight(x, y, cells);
        this.handleHorizontalLeft(x, y, cells);
        this.handleVerticalDown(x, y, cells);
        this.handleVerticalUp(x, y, cells);
    }

    canMove(startSpot: Spot, possibleSpot: Spot) {
        return !!this.possibleMoves.find(cell => cell.x === possibleSpot.x && cell.y === possibleSpot.y);
    }

}