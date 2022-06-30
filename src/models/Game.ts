import {Player} from "./Player";
import {Board} from "./Board";
import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";
import {Figure} from "./Figure";
import {HistoryChess} from "./HistoryChess";

export enum StatusGame {
    GAME = 'game',
    MATE = 'mate',
    ENDGAME = 'endgame',
}

export type spotChoice = {
    isAvailable: boolean;
    isUnderMate: boolean;
}

export class Game {
    white: Player;
    black: Player;
    chessBoard: Board;
    activePlayer: Player;
    history: HistoryChess;
    status: StatusGame = StatusGame.GAME;

    constructor() {
        this.white = new Player(ChessEnum.WHITE);
        this.black = new Player(ChessEnum.BLACK);
        this.activePlayer = this.white
        this.chessBoard = new Board();
        this.history = new HistoryChess(this.chessBoard)
    }

    public isPlayerTurn(figure: Figure) {
        return this.activePlayer.playerColor === figure.color;
    }

    backProgress() {
        this.history.rollback();
        this.chessBoard.resetSteps();
        this.changePlayer();
    }

    private changePlayer() {
        if (this.activePlayer.playerColor === 'black')
            this.activePlayer = this.white;
        else this.activePlayer = this.black;
    }

    private moveFigure(next: Spot) {
        if (this.chessBoard.selectedSpot) {
            this.history.writeHistory(next, this.chessBoard.selectedSpot); // update table
        }
        this.chessBoard.moveFigure(next)
        this.changePlayer();

        const {isAvailable, isUnderMate} = this.chessBoard.checkMate(next);
        if (isUnderMate) this.status = StatusGame.MATE;
        if (!isAvailable && isUnderMate) this.status = StatusGame.ENDGAME;
        if (!isUnderMate) this.status = StatusGame.GAME;

        this.chessBoard.resetSteps();

    }

    private moveFigureOnMate(next: Spot) {
        if (this.chessBoard.selectedSpot) {
            this.history.writeHistory(next, this.chessBoard.selectedSpot); // update table
        }
        this.chessBoard.moveFigure(next)
        this.changePlayer();
        this.chessBoard.checkMate(next);

        this.chessBoard.resetSteps();

    }

    resolveGame(next: Spot) {
        switch (this.status) {
            case StatusGame.ENDGAME:
                alert(`END GAME`);
                this.chessBoard.resetSteps();
                break;
            case StatusGame.GAME:
                this.moveFigure(next);
                break;
            case StatusGame.MATE:
                alert('Mate!')

                break;
            default:
                this.moveFigure(next)
        }
    }

}