
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Soluciones from './pages/Soluciones';
import Panel from './pages/Panel';


function App() {
    return (
        <Router>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/soluciones" element={<Soluciones />} />
                    <Route path="/panel" element={<Panel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
