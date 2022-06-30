import {Spot} from "./Spot";
import {Table} from "./Table";
import {Board} from "./Board";
import {Pawn} from "./Pawn";
import {ChessEnum} from "./ChessEnum";
import {Figure} from "./Figure";

type positionType = {
    next: Spot;
    prev: Spot;
    count: number;
}

export class HistoryChess {
    historyPosition = 0;
    positionStack = new Map<number, positionType>();
    table: Table;
    board: Board;

    constructor(board: Board) {
        this.board = board;
        this.table = new Table();
    }

    writeHistory(next: Spot, prev: Spot) {
        let historyFigure = next.figure;
        let historyPrevFigure = prev.figure;
        if (next.figure instanceof Pawn) {
            historyFigure = new Pawn(next.figure.color)
        }
        if (prev.figure instanceof Pawn) {
            historyPrevFigure = new Pawn(prev.figure.color)
        }
        this.historyPosition++;
        const nextSpot = new Spot({x: next.x, y: next.y, color: next.color, figure: historyFigure})
        const prevSpot = new Spot({x: prev.x, y: prev.y, color: prev.color, figure: historyPrevFigure})
        this.positionStack.set(this.historyPosition, {next: nextSpot, prev: prevSpot, count: this.historyPosition});
    }

    rollback() {
        if (this.historyPosition === 0) return;
        const stack = this.positionStack.get(this.historyPosition);
        if (stack)
            this.board.revertSpots(stack.next, stack.prev);
        this.positionStack.delete(this.historyPosition);
        this.historyPosition--;
    }

}