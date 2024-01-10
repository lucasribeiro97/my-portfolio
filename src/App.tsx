import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
      </Route>
    </Routes>
  );
}

export default App;
