import "./printList.scss";

//Componente para renderizar los resultados obtenidos de la API.

function PrintList({ data }) {
  return (
    <section className="list">
      <ul className="list__ul">
        {data ? (
          data.map((element, i) => (
            <li className="list__element" key={i}>
              <p className="list__paragraph">
                <span className="list__span">Policy Id: </span>
                {element.policyId}
              </p>
              <p className="list__paragraph">
                <span className="list__span"> CaName: </span> {element.caName}
              </p>
              <p className="list__paragraph">
                <span className="list__span"> Relative Path: </span>
                {element.relativePath}
              </p>
              <p className="list__paragraph">
                <span className="list__span">PemFiles: </span>
                {element.pemFiles}
              </p>
            </li>
          ))
        ) : (
          <p className="loading"> </p>
        )}
      </ul>
    </section>
  );
}

export { PrintList };
