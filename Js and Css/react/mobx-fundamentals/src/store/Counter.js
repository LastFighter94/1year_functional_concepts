import {makeAutoObservable} from "mobx";

class Counter {
    count = 0
    // здесь внутри класса мы создаем переменные, которые будут являться состоянием

    timer = 60

    constructor() {
        makeAutoObservable(this) // параметром принимает контекст текущего класса
    }

    // любая созданная функция это аналог action, которое это состояние будет изменять

    // !!! в отличие от REDUX состояние в MOBX является изменяемым и мы не должны каждый раз
    // возращать новый объект

    increment(){
        this.count = this.count + 1
        console.log('increment', this.count)
    }
    decrement(){
        this.count = this.count - 1
        console.log('decrement', this.count)
    }

    // если мы используем автоматическое слежение, то любая функция помеченная ключевым словом get будет
    // вычисляемым значением computed свойством
    get total(){
        return 'Count  timer = ' + this.timer + this.count
    }
}

export default new Counter()