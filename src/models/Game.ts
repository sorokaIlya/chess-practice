import {Player} from "./Player";
import {Board} from "./Board";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";
import {Table} from "./Table";
import {Figure} from "./Figure";

enum StatusGame {
    START = 'start',
    CHECKMATE = 'checkmate',
    MATE = 'mate'
}

export class Game {
    white: Player;
    black: Player;
    chessBoard: Board;
    activePlayer: Player;
    table: Table

    constructor() {
        this.white = new Player(ChessEnum.WHITE);
        this.black = new Player(ChessEnum.BLACK);
        this.activePlayer = this.white
        this.chessBoard = new Board();
        this.table = new Table();
    }

    private isPlayerTurn(figure: Figure) {
        return this.activePlayer.playerColor === figure.color;
    }

    private changePlayer() {
        if (this.activePlayer.playerColor === 'black')
            this.activePlayer = this.white;
        else this.activePlayer = this.black;
    }

    public moveFigure(next: Spot) {
        const start = this.chessBoard.selectedSpot;
        if (start && start.figure && this.isPlayerTurn(start.figure)) {
            if (next.isAvailable) {
                if (next.figure) {
                    this.table.addBeatenFigure(next.figure, this.activePlayer);
                }
                next.setFigure(start.figure);
                start.setFigure(null);
                this.changePlayer();
            }
            this.chessBoard.resetSteps();
        }
    }


}