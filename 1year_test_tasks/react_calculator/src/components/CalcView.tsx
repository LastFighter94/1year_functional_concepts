import React, {useRef} from 'react';
import {
    deleteCalcItem,
    onDragInsideView,
    onDragOverAndLeave,
    onDragOverInsideView,
    onDrop,
    onDropInsideView
} from "../utils/dragDropEvents";
import Store from "../store/dragDropState";
import Display from "./Display";
import Operations from "./Operations";
import Nums from "./Nums";
import Equal from "./Equal";
import {observer} from "mobx-react-lite";

const CalcView = observer (() => {
    const view = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={view}
            className="sidebar"
            onDrop={e => onDrop(e, view)}
            onDragOver={(e) => onDragOverAndLeave(e, false)}
            onDragLeave={(e) => onDragOverAndLeave(e, true)}
        >
            {Store.arrCalcItems.length
                ? (
                    <>
                        {Store.arrCalcItems.map((item) => (
                            <div
                                className="sidebar-container"
                                key={item.name}
                                draggable={item.name !== 'display'}
                                onDragStart={e => onDragInsideView(e, item)}
                                onDrop={e => onDropInsideView(e, item)}
                                onDragOver={e => onDragOverInsideView(e)}
                                onDoubleClick={e => deleteCalcItem(e, item)}
                            >
                                {item.name === 'display' && <div><Display/></div>}
                                {item.name === 'operations' && <div><Operations/></div>}
                                {item.name === 'nums' && <div><Nums/></div>}
                                {item.name === 'equal' && <div><Equal/></div>}
                            </div>
                        ))}
                    </>
                )
                : (
                    <div className={!Store.isFirstDragComputed ? "first-view-container captured" : "first-view-container"}>
                        <div className="info-box">
                            <i className="fa-regular fa-image"></i>
                            <h4>Перетащите сюда</h4> любой элемент из левой панели
                        </div>
                    </div>
                )
            }
        </div>
    );
});

export default CalcView;