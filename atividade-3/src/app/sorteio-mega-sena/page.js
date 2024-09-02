import Logo from "./Logo";
import Numero from "./NumeroSorteio";

export default function Sorteio() {
  return (
    <>
      <Logo />

      <h2 className="subtitulo">Seu dia da sorte!</h2>

      <div className="resultadoDoSorteio">
        <Numero />
        <Numero />
        <Numero />
        <Numero />
        <Numero />
        <Numero />
      </div>
    </>
  );
}
