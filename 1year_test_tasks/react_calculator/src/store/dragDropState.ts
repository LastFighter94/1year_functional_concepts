import {makeAutoObservable} from "mobx";
import {ICalcItem} from "../types/ICalcItem.js";

class Store {
    arrCalcItems: ICalcItem[] = []
    calcItem: ICalcItem = {reactNode: null, name: ''}
    isDragInsideView: boolean = false
    isFirstDrag: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    get isDragInsideViewComputed(){
        return this.isDragInsideView
    }

    get isFirstDragComputed(){
        return this.isFirstDrag
    }

    setIsDragInsideView(value: boolean){
        this.isDragInsideView = value
    }

    setIsFirstDrag(value: boolean){
        this.isFirstDrag = value
    }

    setCalcItem(item: ICalcItem){
        this.calcItem = item
    }

    addCalcItem(item: ICalcItem){
        this.arrCalcItems.push(item)
    }

    deleteCalcItem(item: ICalcItem){
        this.arrCalcItems = this.arrCalcItems.filter(i => i !== item)
    }

    replaceCalcItems(item: ICalcItem){
        // костыль на первое время
        // суть костыля - https://mobx.js.org/react-optimizations.html
        const mapObserver = this.arrCalcItems.map((i) => {
            if (i.name === item.name){
                return {...i, name: this.calcItem.name}
            }
            if (i.name === this.calcItem.name){
                return {...i, name: item.name}
            }
            return i
        })

        this.arrCalcItems = mapObserver
    }
}

export default new Store()