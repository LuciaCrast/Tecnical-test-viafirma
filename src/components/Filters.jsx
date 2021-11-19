import "./filters.scss";

//Componente para renderizar los valores de los distintos filtros.

function Filters({
  area,
  country,
  environment,
  policyID,
  onChangeEnvironment,
  onChangeArea,
  onChangeCountry,
  onChangePolicyID,
}) {
  return (
    <form className="form">
      <h2 className="form__title"> Filtros de Búsqueda </h2>
      <section className="form__inputSection">
        <input
          onChange={onChangePolicyID}
          type="text"
          name="policyID"
          className="form__input"
          placeholder="Buscar por Política de ID"
          value={policyID}
        />
      </section>
      <section className="form__selectSection">
        <select
          onChange={onChangeEnvironment}
          name=""
          id=""
          className="form__select"
        >
          <option className="form__option" value="">
            Entorno
          </option>
          {environment.map((value, i) => (
            <option className="form__option" value={value} key={i}>
              {value}
            </option>
          ))}
        </select>
        <select onChange={onChangeArea} name="" id="" className="form__select">
          <option className="form__option" value="">
            Área
          </option>
          {area.map((value, i) => (
            <option className="form__option" value={value} key={i}>
              {value}
            </option>
          ))}
        </select>
        <select
          onChange={onChangeCountry}
          name=""
          id=""
          className="form__select"
        >
          <option value=""> País </option>
          {country.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </select>{" "}
      </section>
    </form>
  );
}

export { Filters };
