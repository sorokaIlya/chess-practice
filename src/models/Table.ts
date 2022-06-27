import {Figure} from "./Figure";
import {Pawn} from "./Pawn";
import {Horse} from "./Horse";
import {Rook} from "./Rook";
import {Bishop} from "./Bishop";
import {Queen} from "./Queen";
import {Player} from "./Player";

interface FigureDesk {
    figure: Figure,
    score: number
}

export class Table {
    private figuresWhite: Array<FigureDesk> = [];
    private figuresBlack: Array<FigureDesk> = [];

    addBeatenFigure(figure: Figure, player: Player) {
        let score = 0;
        if (figure instanceof Pawn) {
            score = 10;
        }
        if (figure instanceof Rook) {
            score = 50;
        }
        if (figure instanceof Bishop) {
            score = 30;
        }
        if (figure instanceof Horse) {
            score = 30;
        }
        if (figure instanceof Queen) {
            score = 80;
        }
        if (player.playerColor === 'white') {
            this.figuresBlack.push({figure, score})
        } else {
            this.figuresWhite.push({figure, score})
        }
    }

    get getTableWhite() {
        return this.figuresWhite;
    }

    get getTableBlack() {
        return this.figuresBlack;
    }
}
