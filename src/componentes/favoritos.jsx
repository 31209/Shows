import React from "react";

function Favoritos({ favoritos, eliminarFavorito }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ Mis Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>No has agregado ninguna serie aún.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {favoritos.map((show) => (
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
              <button
                onClick={() => eliminarFavorito(show.id)}
                style={{
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                🗑️ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
