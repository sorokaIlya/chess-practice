import {Player} from "./Player";
import {Board} from "./Board";
import {ChessEnum} from "./ChessEnum";

export class Game {
    white: Player;
    black: Player;
    chessBoard: Board;
    currentTurn: ChessEnum;
    constructor() {
        this.white = new Player(ChessEnum.WHITE);
        this.black = new Player(ChessEnum.BLACK);
        this.chessBoard = new Board();
        this.currentTurn = ChessEnum.WHITE;
    }


}