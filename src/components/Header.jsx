import logo from "../images/logo-viafirma.png";
import "./header.scss";

//Componente para renderizar el header.

function Header() {
  return (
    <header className="header" id="header">
      <img src={logo} alt="No se encuentra la imagen" className="header__img" />
    </header>
  );
}

export { Header };
