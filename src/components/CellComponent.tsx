import React from "react";
import {Spot} from "../models/Spot";

type CellProps = {
    cell: Spot
    onSelect: (cell: Spot) => void
    pasteFigure: (cell: Spot) => void
}

export const CellComponent = (props: CellProps) => {
    const {cell, onSelect, pasteFigure} = props;

    const styleArguments = ['cell',
        cell.color.toString(),
        ...[cell.isAvailable && cell.figure && 'aimed']

    ]
    return (
        <div className={styleArguments.filter(Boolean).join(' ')} onClick={() => {
            if (cell.isAvailable) pasteFigure(cell)
        }}>
            {cell.figure &&
            <div onClick={() => !cell.isAvailable && onSelect(cell)}>
                <img src={require(`./../assets/${cell.figure.figureImg}.png`)} alt=""/>
            </div>
            }
            {cell.isAvailable && !cell.figure && <div className="available"></div>}

        </div>
    )
}