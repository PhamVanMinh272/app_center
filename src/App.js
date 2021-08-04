import './App.css';
import AppList from './components/appList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Application Center
      </header>
      <div className="content">
        <AppList></AppList>
      </div>
    </div>
  );
}

export default App;
