import {Figure} from "./Figure";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";
import {Rook} from "./Rook";
import {Bishop} from "./Bishop";

export class Queen extends Figure {
    private mockRookMoves: Rook;
    private mockBishopMoves: Bishop;

    constructor(color: ChessEnum) {
        super(color, `${color}-queen`);
        this.mockRookMoves = new Rook(color);
        this.mockBishopMoves = new Bishop(color);
    }

    handleQueenMoves(x: number, y: number, cells: Spot[][]) {
        this.mockRookMoves.setRookLines(x, y, cells);
        this.mockBishopMoves.setDiagonalSpots(x, y, cells);
    }

    canMove(currentSpot: Spot, possibleSpot: Spot) {
        return this.mockRookMoves.canMove(currentSpot, possibleSpot) || this.mockBishopMoves.canMove(currentSpot, possibleSpot);
    }

}