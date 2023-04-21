import './App.css';
import Todo from "./components/todo";

function App() {
    const todos = [
        {id: 1, title: 'do something', completed: false},
        {id: 2, title: 'do something 2', completed: true}
    ]
  return (
    <div className="App">
        {todos.map((todo => {
            return (<Todo todo={todo} key={todo.id}/>)
        }))}
    </div>
  );
}

export default App;
