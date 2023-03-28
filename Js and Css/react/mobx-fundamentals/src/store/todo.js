import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: 1, title: 'Сходи в магазин', completed: false},
        {id: 2, title: 'Сделай жомашку', completed: false},
        {id: 3, title: 'Поставь лайк', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo){
        this.todos.push(todo)
    }
    // map, filter, reduce каждый раз возвращают новый массив, поэтому массив, который вернет эта функция
    // необходимо будет присвоить нашему массиву todos
    removeTodo(id){
        // ну а вообще можно и сам to-do передать - потом его
        // поле изменить, махинации с массивом ни здесь, ни внизу не обязательны
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('remove')
    }
    completeTodo(id){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        console.log('complete')
    }

    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()