import React, { useState, useEffect } from "react";

function Original() {
  const [generos, setGeneros] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null);
  const [shows, setShows] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cargarShows = async () => {
      try {
        const resp = await fetch("https://api.tvmaze.com/shows");
        const data = await resp.json();
        const todosLosGeneros = [...new Set(data.flatMap((show) => show.genres))];
        setGeneros(todosLosGeneros);
      } catch (error) {
        console.error("Error al cargar los shows:", error);
      }
    };
    cargarShows();
  }, []);

  const descubrirGenero = async () => {
    if (generos.length === 0) return;
    const randomGenero = generos[Math.floor(Math.random() * generos.length)];
    setGeneroSeleccionado(randomGenero);
    setCargando(true);

    try {
      const resp = await fetch("https://api.tvmaze.com/shows");
      const data = await resp.json();
      const filtrados = data.filter((show) => show.genres.includes(randomGenero));
      setShows(filtrados.slice(0, 10));
    } catch (error) {
      console.error("Error mostrando el género:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px 15px",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          color: "#111",
          fontSize: "1.4rem",
          marginBottom: "10px",
        }}
      >
        🎬 Original
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "0.95rem",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Descubre series por género, cada toque te mostrará algo nuevo 🎲
      </p>

      {/* Botón principal */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={descubrirGenero}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: "12px 30px",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
            transition: "0.3s",
          }}
        >
          🎲 Descubrir género
        </button>
      </div>

      {/* Cargando */}
      {cargando && (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            fontSize: "1rem",
            marginTop: "20px",
          }}
        >
          Cargando series...
        </p>
      )}

      {/* Resultado */}
      {!cargando && generoSeleccionado && (
        <>
          <h2
            style={{
              textAlign: "center",
              color: "#007bff",
              fontSize: "1.1rem",
              marginBottom: "15px",
            }}
          >
            🎭 Género: {generoSeleccionado}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {shows.map((show) => (
              <div
                key={show.id}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={
                    show.image?.medium ||
                    "https://via.placeholder.com/300x400?text=Sin+imagen"
                  }
                  alt={show.name}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "15px" }}>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "5px",
                      color: "#222",
                    }}
                  >
                    {show.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      lineHeight: "1.4em",
                      maxHeight: "85px",
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        show.summary ||
                        "<em>Sin descripción disponible.</em>",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Mensaje inicial */}
      {!generoSeleccionado && !cargando && (
        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "0.9rem",
            marginTop: "40px",
          }}
        >
          Toca el botón para comenzar a explorar ✨
        </p>
      )}
    </div>
  );
}

export default Original;
