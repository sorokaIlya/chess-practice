import React from "react";
import {FigureDesk, Table} from "../models/Table";

const FigureScore = (props: FigureDesk) => {
    return (
        <div className={'table-figure'}>
            <span>{props.score}</span>
            <img src={require(`./../assets/${props.figure.figureImg}.png`)} alt=""/>
        </div>
    )
}
export const TableComponent = ({table}: { table: Table }) => {
    return (
        <div>
            <div className={'whites'}>
                {table.getTableWhite.map((item, ind) =>
                    <FigureScore key={ind} {...item}/>)}
            </div>
            <div className={'black'}>
                {table.getTableBlack.map((item, ind) =>
                    <FigureScore key={ind} {...item}/>)}
            </div>
        </div>)
}