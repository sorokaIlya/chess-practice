import {Spot} from "./Spot";
import {ChessEnum} from "./ChessEnum";
import {Pawn} from "./Pawn";
import {Rook} from "./Rook";
import {Bishop} from "./Bishop";
import {Horse} from "./Horse";
import {Queen} from "./Queen";
import {King} from "./King";
import {Figure} from "./Figure";

export class Board {
    _cells: Spot[][];

    constructor() {
        this._cells = [];
        this.initDesk()
    }

    private initDesk() {
        this._cells[0] = [];
        this._cells[1] = [];
        this._cells[6] = [];
        this._cells[7] = [];
        for (let i = 0; i < 8; i++) {
            const cellColorUp = ((1 + i) % 2 == 0) ? ChessEnum.WHITE : ChessEnum.BLACK;
            const cellColorDown = ((6 + i) % 2 == 0) ? ChessEnum.WHITE : ChessEnum.BLACK;
            this._cells[1][i] = new Spot({x: 1, y: i, color: cellColorUp, figure: new Pawn(ChessEnum.BLACK)})
            this._cells[6][i] = new Spot({x: 6, y: i, color: cellColorDown, figure: new Pawn(ChessEnum.WHITE)})
        }
        this._cells[0][0] = new Spot({x: 0, y: 0, color: ChessEnum.WHITE, figure: new Rook(ChessEnum.BLACK)})
        this._cells[0][7] = new Spot({x: 0, y: 7, color: ChessEnum.BLACK, figure: new Rook(ChessEnum.BLACK)})
        this._cells[0][1] = new Spot({x: 0, y: 1, color: ChessEnum.BLACK, figure: new Horse(ChessEnum.BLACK)})
        this._cells[0][6] = new Spot({x: 0, y: 6, color: ChessEnum.WHITE, figure: new Horse(ChessEnum.BLACK)})
        this._cells[0][2] = new Spot({x: 0, y: 2, color: ChessEnum.WHITE, figure: new Bishop(ChessEnum.BLACK)})
        this._cells[0][5] = new Spot({x: 0, y: 5, color: ChessEnum.BLACK, figure: new Bishop(ChessEnum.BLACK)})
        this._cells[0][3] = new Spot({x: 0, y: 3, color: ChessEnum.BLACK, figure: new Queen(ChessEnum.BLACK)})
        this._cells[0][4] = new Spot({x: 0, y: 4, color: ChessEnum.WHITE, figure: new King(ChessEnum.BLACK)})

        this._cells[7][0] = new Spot({x: 7, y: 0, color: ChessEnum.BLACK, figure: new Rook(ChessEnum.WHITE)})
        this._cells[7][7] = new Spot({x: 7, y: 7, color: ChessEnum.WHITE, figure: new Rook(ChessEnum.WHITE)})
        this._cells[7][1] = new Spot({x: 7, y: 1, color: ChessEnum.WHITE, figure: new Horse(ChessEnum.WHITE)})
        this._cells[7][6] = new Spot({x: 7, y: 6, color: ChessEnum.BLACK, figure: new Horse(ChessEnum.WHITE)})
        this._cells[7][2] = new Spot({x: 7, y: 2, color: ChessEnum.BLACK, figure: new Bishop(ChessEnum.WHITE)})
        this._cells[7][5] = new Spot({x: 7, y: 5, color: ChessEnum.WHITE, figure: new Bishop(ChessEnum.WHITE)})
        this._cells[7][3] = new Spot({x: 7, y: 3, color: ChessEnum.WHITE, figure: new Queen(ChessEnum.WHITE)})
        this._cells[7][4] = new Spot({x: 7, y: 4, color: ChessEnum.BLACK, figure: new King(ChessEnum.WHITE)})

        for (let i = 2; i < 6; i++) {
            this._cells[i] = [];
            for (let j = 0; j < 8; j++) {
                const cellColor = ((i + j) % 2 == 0) ? ChessEnum.WHITE : ChessEnum.BLACK
                this._cells[i][j] = new Spot({x: i, y: j, color: cellColor})
            }
        }
    }

    public get getSells() {
        return this._cells;
    }

    selectFigure(figure:Figure){

    }
}