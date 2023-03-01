import { Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' />
        <Route path='/details/:id' />
        <Route path='*' />
      </Routes>
    </main>
  );
}

export default App;
