import {Spot} from "./Spot";
import {ChessEnum} from "./ChessEnum";
import {Pawn} from "./Pawn";
import {Rook} from "./Rook";
import {Bishop} from "./Bishop";
import {Horse} from "./Horse";
import {Queen} from "./Queen";
import {King} from "./King";
import {spotChoice} from "./Game";
import {Player} from "./Player";

export class Board {

    readonly _cells: Spot[][];
    selectedSpot: Spot | null = null;

    constructor() {
        this._cells = [];
        this.initDesk()
    }

    private initDesk() {
        console.log('init desk!');
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
                this._cells[i][j] = new Spot({x: i, y: j, color: cellColor, figure: null})
            }
        }
    }

    public get getSells() {
        return this._cells;
    }

    resetSteps() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this._cells[i][j].setAvailable(false);
            }
        }
    }


    analyzeDesk(): spotChoice {
        const spotsOption: spotChoice = {
            isUnderMate: false,
            isAvailable: false
        }
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this._cells[i][j].checkUnderMate() && (spotsOption.isUnderMate = true);
                this._cells[i][j].isAvailable && (spotsOption.isAvailable = true);
            }
        }
        return spotsOption;
    }

    revertSpots(next: Spot, prev: Spot) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i === next.x && j === next.y) this._cells[i][j] = next;
                if (i === prev.x && j === prev.y) this._cells[i][j] = prev;
            }
        }
    }

    analyzeMateBeforeMove(player: Player) {
        if (!this.selectedSpot) return;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                // mark all spots
                if (this._cells[i][j].figure && player.playerColor != this._cells[i][j].figure?.color)
                    this.selectFigure(this._cells[i][j])
            }
        }
        this.resetSteps();
        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++) {
                if (this.selectedSpot.figure?.canMove(this.selectedSpot, this._cells[i][j])) {
                    this._cells[i][j].isAvailable
                }
            }

    }

    selectFigure = (cell: Spot, declareMove = false) => {
        if (cell.figure) {
            if (cell.figure instanceof Rook) {
                cell.figure.setRookLines(cell.x, cell.y, this._cells);
            }
            if (cell.figure instanceof Bishop) {
                cell.figure.setDiagonalSpots(cell.x, cell.y, this._cells);
            }
            if (cell.figure instanceof Queen) {
                cell.figure.handleQueenMoves(cell.x, cell.y, this._cells);
            }

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (i == cell.x && j === cell.y) continue;
                    if (this._cells[i][j].isAvailable) {
                        this._cells[i][j].setAvailable(false);
                    }
                    if (cell.figure.canMove(cell, this._cells[i][j])) {
                        this._cells[i][j].setAvailable(true);
                        if(declareMove){
                            this._cells[i][j].setMate();
                        }
                    }
                }
            }
            this.selectedSpot = cell;
        }
    }

    moveFigure(next: Spot) {
        if (next.isAvailable && this.selectedSpot) {
            if (this.selectedSpot.figure instanceof Pawn) {
                this.selectedSpot.figure.removeFirstDistance();
                if (this.selectedSpot.figure.color === 'black' && next.x === 7) {
                    next.setFigure(new Queen(this.selectedSpot.figure.color));
                    this.selectedSpot.setFigure(null);
                }
                if (this.selectedSpot.figure.color === 'white' && next.x === 0) {
                    next.setFigure(new Queen(this.selectedSpot.figure.color));
                    this.selectedSpot.setFigure(null);
                }
            }
            next.setFigure(this.selectedSpot.figure);
            this.selectedSpot.setFigure(null);
        }
    }


    checkMate(fromCell: Spot) {
        this.selectFigure(fromCell, true);
        return this.analyzeDesk();
    }
}