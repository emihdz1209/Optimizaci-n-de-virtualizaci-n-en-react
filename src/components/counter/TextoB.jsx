import { memo } from "react";

function TextoB() {
  return (
    console.log("Renderizando TextoB"),
    <div className="texto-hijo">
      <p>Soy el componente TextoB</p>
    </div>
  );
}

export default memo(TextoB);