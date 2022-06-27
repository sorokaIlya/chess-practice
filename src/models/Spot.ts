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
    private _figure: Figure | null;
    readonly x: number;
    readonly y: number;
    private _available: boolean;

    constructor(spot: SpotI) {
        this.color = spot.color;
        this.x = spot.x;
        this.y = spot.y;
        this._available = false;
        this._figure = spot.figure ?? null;
    }


    setFigure(value: Figure | null) {
        this._figure = value;
    }

    get figure(): Figure | null {
        return this._figure;
    }

    public setAvailable(value: boolean):Spot {
        this._available = value;
        return this
    }

    get isAvailable() {
        return this._available
    }
}