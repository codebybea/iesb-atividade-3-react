export default function Numero() {
  let numeroDoSorteio = parseInt(Math.random() * 59) + 1;

  let numeroComZero =
    numeroDoSorteio < 10 ? `0${numeroDoSorteio}` : numeroDoSorteio;

  return (
    <>
      <h3 className= "numeros">{numeroComZero}</h3>
    </>
  );
}
