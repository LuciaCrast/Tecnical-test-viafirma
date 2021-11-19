import "./footer.scss";

//Componente para rederizar el Footer con un enlace interno
// que nos permite volver a la parte superior de la página.

function Footer() {
  return (
    <footer className="footer">
      <a href="#header" className="footer__arrowContainer">
        <i className="fas fa-chevron-up footer__arrow"></i>
      </a>
    </footer>
  );
}

export { Footer };
