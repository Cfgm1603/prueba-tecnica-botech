
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Soluciones from './pages/Soluciones';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/soluciones" element={<Soluciones />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
