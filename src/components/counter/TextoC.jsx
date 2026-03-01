import { memo } from "react";

function TextoC() {
  return (
    console.log("Renderizando TextoC"),
    (
      <div className="texto-hijo">
        <p>Soy el componente TextoC</p>
      </div>
    )
  );
}

export default memo(TextoC);
