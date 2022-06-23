import React from "react";
import {Spot} from "../models/Spot";


type CellProps = {
    cell: Spot
}
export const CellComponent = (props:CellProps) => {
    const {cell} = props;
    const isAvailable = cell.figure?.canMove();
    return (
        <div className={['cell',cell.color.toString()].join(' ')}>
            {cell.figure?.figureImg &&
                <div>
                    <img src={require(`./../assets/${cell.figure.figureImg}.png`)} alt=""/>
                </div>
            }
            {isAvailable && <div className="available">{}</div>}
        </div>
    )
}