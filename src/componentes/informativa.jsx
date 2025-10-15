import React from "react";

function Informativa() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>🎬 Información de la Aplicación</h1>
      <p>
        Bienvenido a <strong>TV Explorer</strong>, una aplicación desarrollada
        con <em>React</em> que utiliza la API pública de{" "}
        <a
          href="https://www.tvmaze.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          TVMaze
        </a>{" "}
        para mostrar información actualizada sobre miles de series de televisión
        de todo el mundo.
      </p>

      <h2>🧩 ¿Qué hace la app?</h2>
      <p>
        La aplicación permite consultar un amplio catálogo de series, incluyendo
        detalles como el título, idioma, género, fecha de estreno, calificación
        y un resumen con su imagen. Además, el usuario puede realizar búsquedas
        dinámicas para encontrar su serie favorita de forma rápida y sencilla.
      </p>

      <h2>🌟 ¿Qué la hace original?</h2>
      <ul>
        <li>
          <strong>Diseño interactivo:</strong> ofrece navegación fluida mediante
          React Router, con secciones dedicadas a contenido original,
          informativo y favoritos.
        </li>
        <li>
          <strong>Conexión en tiempo real:</strong> los datos se obtienen
          directamente desde una API pública, lo que garantiza información
          actualizada sin necesidad de recargar manualmente.
        </li>
        <li>
          <strong>Fácil de usar:</strong> interfaz limpia, intuitiva y compatible
          con dispositivos móviles.
        </li>
        <li>
          <strong>Enfoque educativo:</strong> ideal para aprender sobre consumo
          de APIs REST con React y gestión de componentes funcionales.
        </li>
      </ul>

      <h2>💡 Tecnología utilizada</h2>
      <p>
        Esta aplicación está construida con <strong>React + Vite</strong> y
        aprovecha las ventajas del <strong>React Router</strong> para el
        enrutamiento interno. El código está organizado en componentes, lo que
        permite mantener una estructura limpia y escalable.
      </p>

      <h2>📚 Créditos</h2>
      <p>
        Los datos y recursos visuales son proporcionados por{" "}
        <a
          href="https://www.tvmaze.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TVMaze
        </a>
        , una plataforma abierta para consultar información sobre programas de
        televisión, episodios, actores y más.
      </p>

      <p style={{ marginTop: "30px", fontStyle: "italic" }}>
        🚀 Esta app fue creada con el propósito de demostrar el potencial de las
        APIs públicas y la facilidad de integrarlas en proyectos modernos con
        React.
      </p>
    </div>
  );
}

export default Informativa;
