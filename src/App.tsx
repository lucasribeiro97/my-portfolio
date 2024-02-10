import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
      </Route>
    </Routes>
  );
}

export default App;
