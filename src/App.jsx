import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './componentes/home';
import Favoritos from './componentes/favoritos';
import Informativa from './componentes/informativa';
import Original from './componentes/original';
import Detalle from './componentes/detalle';

function App() {
  const [favoritos, setFavoritos] = useState([]);

  // 🔹 Agregar favorito (evita duplicados)
  const agregarFavorito = (show) => {
    if (!favoritos.find((f) => f.id === show.id)) {
      setFavoritos([...favoritos, show]);
    }
  };

  // 🔹 Eliminar favorito
  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        {/* 🔸 Contenido principal */}
        <main className="main-content">
          <Routes>
            <Route
              path="/home"
              element={<Home agregarFavorito={agregarFavorito} favoritos={favoritos} />}
            />
            <Route path="/informativa" element={<Informativa />} />
            <Route path="/original" element={<Original />} />
            <Route
              path="/favoritos"
              element={<Favoritos favoritos={favoritos} eliminarFavorito={eliminarFavorito} />}
            />
            <Route path="/detalle/:depto/:municipio" element={<Detalle />} />
          </Routes>
        </main>

        {/* 🔸 Menú inferior fijo */}
        <nav className="bottom-nav">
          <Link to="/home" className="nav-item">
            🏠 <span>Home</span>
          </Link>
          <Link to="/informativa" className="nav-item">
            ℹ️ <span>Info</span>
          </Link>
          <Link to="/original" className="nav-item">
            🎲 <span>Original</span>
          </Link>
          <Link to="/favoritos" className="nav-item">
            ⭐ <span>Favs ({favoritos.length})</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
