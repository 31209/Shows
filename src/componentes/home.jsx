import React, { useEffect, useState } from "react";

function Home({ agregarFavorito, favoritos }) {
  const [shows, setShows] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const resp = await fetch("https://api.tvmaze.com/shows");
        const data = await resp.json();
        setShows(data);
      } catch (error) {
        console.error("Error cargando shows:", error);
      }
    };
    fetchShows();
  }, []);

  const listaFiltrada = shows.filter((show) =>
    show.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Explora Series</h1>

      <input
        type="text"
        placeholder="Buscar serie..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {listaFiltrada.map((show) => {
          const esFavorito = favoritos.some((f) => f.id === show.id);
          return (
            <div
              key={show.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={show.image?.medium}
                alt={show.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <h3>{show.name}</h3>
              <p>{show.genres.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
