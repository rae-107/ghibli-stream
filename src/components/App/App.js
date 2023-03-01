import { Routes, Route} from 'react-router-dom'
import Main from '../Main/Main'
import './App.css';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:id' />
        <Route path='*' />
      </Routes>
    </main>
  );
}

export default App;
