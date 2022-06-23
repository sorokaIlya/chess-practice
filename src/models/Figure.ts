import {ChessEnum} from "./ChessEnum";

export abstract class Figure {
    readonly color: ChessEnum;
    protected icon: string

    protected constructor(color: ChessEnum, iconFigure: string) {
        this.color = color;
        this.icon = iconFigure;
    }

    public get figureImg(){
        return this.icon;
    }

    abstract canMove(): boolean;


}