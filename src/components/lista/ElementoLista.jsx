import { memo } from "react";

function ElementoLista({ id, nombre, img, likes, onLike, onEliminar }) {
  return (
    console.log(`Renderizando elemento: ${nombre}`),
    <div className="elemento-lista">
      <div className="elemento-info">
        <img
          src={img}
          className="elemento-img"
          alt={nombre}
        />
        <span className="elemento-nombre">{nombre}</span>
      </div>
      <div className="elemento-acciones">
        <button onClick={() => onLike(id)} className="btn-like">
          ♥️ {likes}
        </button>
        <button onClick={() => onEliminar(id)} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default memo(ElementoLista);