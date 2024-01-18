import React from "react";
import {ICalcItem} from "../types/ICalcItem";
import Store from "../store/dragDropState";

export const onDrag = (e: React.DragEvent<HTMLDivElement>, calcItem: ICalcItem) => {
    Store.setCalcItem(calcItem)
    Store.setIsDragInsideView(false)
}

export const onDrop = (e: React.DragEvent<HTMLDivElement>, view: React.RefObject<HTMLDivElement>) => {
    if (Store.isDragInsideViewComputed) return

    const top: number = view.current?.getBoundingClientRect().top || 0
    const bottom: number = view.current?.getBoundingClientRect().bottom || 0
    const right: number = view.current?.getBoundingClientRect().right || 0
    const left: number = view.current?.getBoundingClientRect().left || 0

    if (e.pageX < right && e.pageX > left && e.pageY > top && e.pageY < bottom) {
        Store.addCalcItem(Store.calcItem)
    }

    Store.setCalcItem({reactNode: null, name: ''})
}

export const onDragOverAndLeave = (e: React.DragEvent<HTMLDivElement>, isFirstDrag: boolean) => {
    if (Store.isDragInsideView) return
    if (Store.arrCalcItems.length === 0) {Store.setIsFirstDrag(isFirstDrag)}
    e.preventDefault()
}

export const onDragInsideView = (e: React.DragEvent<HTMLDivElement>, item: ICalcItem) => {
    Store.setIsDragInsideView(true)
    Store.setCalcItem(item)
}

export const onDropInsideView = (e: React.DragEvent<HTMLDivElement>, item: ICalcItem) => {
    if (item.name === 'display') return
    Store.replaceCalcItems(item)
}

export const onDragOverInsideView = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
}

export const deleteCalcItem = (e: React.MouseEvent, item: ICalcItem) => {
    Store.deleteCalcItem(item)
    Store.setIsFirstDrag(true)
}