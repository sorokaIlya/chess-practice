import {ChessEnum} from "./ChessEnum";

export class Player {

    readonly playerColor: ChessEnum;

    constructor(color: ChessEnum) {
        this.playerColor = color;
    }

}