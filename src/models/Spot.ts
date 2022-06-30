import {ChessEnum} from "./ChessEnum";
import {Figure} from "./Figure";
import {King} from "./King";

interface SpotI {
    x: number,
    y: number,
    color: ChessEnum,
    figure: Figure|null
}

export class Spot {

    readonly color: ChessEnum
    private _figure: Figure | null;
    readonly x: number;
    readonly y: number;
    private _available: boolean;
    private _aimedMate: boolean;


    constructor(spot: SpotI) {
        this.color = spot.color;
        this.x = spot.x;
        this.y = spot.y;
        this._available = false;
        this._aimedMate = false
        this._figure = spot.figure ?? null;
    }


    setFigure(value: Figure | null) {
        this._figure = value;
    }

    checkUnderMate() {
        return this._aimedMate;
    }

    get figure(): Figure | null {
        return this._figure;
    }

    public setMate() {
        if (this._figure instanceof King && this._available)
            this._aimedMate = true;
    }

    public setAvailable(value: boolean) {
        this._available = value;
    }

    get isAvailable() {
        return this._available;
    }

}