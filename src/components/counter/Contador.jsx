import { useState } from "react";
import TextoA from "./TextoA";
import TextoB from "./TextoB";
import TextoC from "./TextoC";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    console.log("Renderizando Contador"),
    <section className="seccion-contador">
      <h2>Sección 1: Contador con React.memo</h2>
      <div className="card">
        <label>Contador: {count}</label>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Incrementar
        </button>
      </div>
      <div className="textos-container">
        <TextoA />
        <TextoB />
        <TextoC />
      </div>
    </section>
  );
}

export default Contador;