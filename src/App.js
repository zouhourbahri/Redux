import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListTask from './components/ListTask/ListTask';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <div className="App">
      <h1 className="title"> ToDoList </h1>
      <AddTask />
    <ListTask />
    </div>
  );
}

export default App;
