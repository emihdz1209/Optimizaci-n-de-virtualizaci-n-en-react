Renderizado en React: Virtual DOM, React.memo y map()

¿Qué es el Virtual DOM?
El Virtual DOM es una representación en memoria del DOM real del navegador.
En lugar de modificar directamente el DOM, lo cual es costoso en términos de rendimiento, React: 
  1.- Crea una copia virtual del DOM.
  2.- Cuando ocurre un cambio de estado (state o props), genera un nuevo Virtual DOM.
  3.- Compara el Virtual DOM anterior con el nuevo (proceso llamado diffing).
  4.- Actualiza únicamente las partes del DOM real que cambiaron.
Este proceso se conoce como reconciliación.

¿Por qué es importante?
Manipular el DOM real es lento porque:
  -Implica operaciones de reflow y repaint.
  -Afecta el rendimiento cuando hay muchos elementos.

El Virtual DOM permite:
  -Reducir operaciones innecesarias.
  -Actualizar solo lo estrictamente necesario.
  -Mejorar el rendimiento en aplicaciones grandes.

¿Cuándo ocurre un re-render en React?

Un componente se vuelve a renderizar cuando:
  -Cambia su state
  -Cambian sus props
  -Se vuelve a renderizar su componente padre

Importante: Aunque un componente hijo no use el estado del padre, si el padre se renderiza, por defecto el hijo también lo hace.
Esto puede provocar renderizados innecesarios.

React.memo
React.memo es una función de orden superior (Higher Order Component) que memoriza un componente funcional.
Evita que el componente se vuelva a renderizar si sus props no han cambiado.

Cuando un componente está envuelto en React.memo:
  -React compara las props anteriores con las nuevas.
  -Si son iguales (comparación superficial / shallow comparison), el componente NO se renderiza nuevamente.
  -Si cambian, entonces sí se renderiza.
