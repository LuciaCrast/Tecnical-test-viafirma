import "./pagination.scss";

//Componente para renderizar los botones de la paginación, nº de página
// y páginas totales.

function Pagination({ onClickPrevious, onClickAfter, page, totalPages }) {
  return (
    <section className="sectionPagination">
      <button
        className="sectionPagination__button buttonLeft"
        onClick={onClickPrevious}
      >
        <i className="fas fa-chevron-left "> </i> Anterior
      </button>
      <button
        className="sectionPagination__button buttonRight"
        onClick={onClickAfter}
      >
        Siguiente <i className="fas fa-chevron-right"></i>
      </button>
      <p className="sectionPagination__paragraph paragraph">
        Página <strong> {page}</strong> de <strong> {totalPages}</strong>
      </p>
    </section>
  );
}
export { Pagination };
