import { useState, useMemo } from "react";
import ElementoLista from "./ElementoLista";

function ListaDinamica() {
  const [elementos, setElementos] = useState([
    {
      id: 1,
      nombre: "Charmander",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/200px-Charmander.png",
      likes: 0,
    },
    {
      id: 2,
      nombre: "Bulbasaur",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
      likes: 0,
    },
    {
      id: 3,
      nombre: "Squirtle",
      img: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20160309230820/Squirtle.png",
      likes: 0,
    },
  ]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaImg, setNuevaImg] = useState("");
  const [nextId, setNextId] = useState(4);

  const agregarElemento = () => {
    if (nuevoNombre.trim() === "" || nuevaImg.trim() === "") return;
    setElementos((prev) => [
      ...prev,
      { id: nextId, nombre: nuevoNombre.trim(), img: nuevaImg.trim(), likes: 0 },
    ]);
    setNextId((prev) => prev + 1);
    setNuevoNombre("");
    setNuevaImg("");
  };

  const eliminarElemento = useMemo(() => (id) => {
    setElementos((prev) => prev.filter((el) => el.id !== id));
  }, []);

  const revertirOrden = () => {
    setElementos((prev) => [...prev].reverse());
  };

  const darLike = useMemo(() => (id) => {
    setElementos((prev) =>
      prev.map((el) => (el.id === id ? { ...el, likes: el.likes + 1 } : el))
    );
  }, []);

  return (
    <section className="seccion-lista">
      <h2>Pokédex - Lista Dinámica con map() y keys</h2>
      <div className="lista-controles">
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Nombre del Pokémon"
        />
        <input
          type="text"
          value={nuevaImg}
          onChange={(e) => setNuevaImg(e.target.value)}
          placeholder="URL de la imagen"
          onKeyDown={(e) => e.key === "Enter" && agregarElemento()}
        />
        <button onClick={agregarElemento} className="btn-agregar">
          Agregar
        </button>
        <button onClick={revertirOrden} className="btn-revertir">
          Revertir orden
        </button>
      </div>
      <div className="lista-elementos">
        {elementos.map((elemento) => (
          <ElementoLista
            key={elemento.id}
            id={elemento.id}
            nombre={elemento.nombre}
            img={elemento.img}
            likes={elemento.likes}
            onLike={darLike}
            onEliminar={eliminarElemento}
          />
        ))}
      </div>
      {elementos.length === 0 && (
        <p className="lista-vacia">Aún no tienes un Pokémon. Agrega uno nuevo.</p>
      )}
    </section>
  );
}

export default ListaDinamica;
