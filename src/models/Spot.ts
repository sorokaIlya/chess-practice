import {ChessEnum} from "./ChessEnum";
import {Figure} from "./Figure";

interface SpotI {
    x: number,
    y: number,
    color: ChessEnum,
    figure?: Figure
}

export class Spot {
    color: ChessEnum
    figure: Figure | null;
    readonly x: number;
    readonly y: number;
    private _available: boolean;

    constructor(spot: SpotI) {
        this.color = spot.color;
        this.x = spot.x;
        this.y = spot.y;
        this._available = false;
        this.figure = spot.figure ?? null;
    }


    setAvailable(value: boolean) {
        this._available = value;
    }

    get isAvailable() {
        return this._available
    }
}