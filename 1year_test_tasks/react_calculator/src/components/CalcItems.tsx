import React from 'react';
import {calcItems} from "../utils/calcItems";
import Store from "../store/dragDropState";
import {onDrag} from "../utils/dragDropEvents";
import {observer} from "mobx-react-lite";

const CalcItems = observer(() => {
    return (
        <div className="sidebar">
            {calcItems.map(i => (
                <div
                    className={Store.arrCalcItems.find(item => item.name === i.name) ? 'sidebar-container active' : 'sidebar-container'}
                    draggable={!Store.arrCalcItems.find(item => item.name === i.name)}
                    onDragStart={(e) => onDrag(e, {
                        reactNode: i.reactNode,
                        name: i.name
                    })}
                    key={i.name}
                >
                    {i.reactNode}
                </div>
            ))}
        </div>
    );
});

export default CalcItems;