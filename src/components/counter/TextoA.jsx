import { memo } from "react";

function TextoA() {
  return (
    console.log("Renderizando TextoA"),
    <div className="texto-hijo">
      <p>Soy el componente TextoA</p>
    </div>
  );
}

export default memo(TextoA);