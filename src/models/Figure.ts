import {ChessEnum} from "./ChessEnum";
import {Spot} from "./Spot";

export abstract class Figure {
    readonly color: ChessEnum;
    protected icon: string;

    protected constructor(color: ChessEnum, iconFigure: string) {
        this.color = color;
        this.icon = iconFigure;
    }

    public get figureImg(): string {
        return this.icon;
    }

    abstract canMove(currentSpot: Spot, nextSpot: Spot): boolean;

}