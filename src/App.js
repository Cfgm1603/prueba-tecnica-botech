import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Soluciones from "./pages/Soluciones";
import Panel from "./pages/Panel";
import Colegios from "./pages/Colegios";
import Compania from "./pages/Compania";
import Ventas from "./pages/Ventas";

function App() {
  return (
    
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/colegios" element={<Colegios />} />
          <Route path="/compania" element={<Compania />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
