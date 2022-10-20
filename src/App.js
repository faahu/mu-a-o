import './App.css';
import logo from './logo.svg';

import TaskListComponent from './components/container/tasks_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
