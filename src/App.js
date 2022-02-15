
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <h1>Projeto Kanban</h1>
      <div className="container_boards">
        <Board></Board>
        <Board></Board>
        <Board></Board>
      </div>

    </div>
  );
}

export default App;
