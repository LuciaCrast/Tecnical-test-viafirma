import { useState, useEffect } from "react";
import { GetDataFromJson } from "../services/GetDataFromJson";
import { PrintList } from "./PrintList";
import { GetFilter, GetPagination } from "../utils/ultils";
import { Pagination } from "./Pagination";
import { Filters } from "./Filters";
import { Header } from "./Header";
import "./principal.scss";
import { Footer } from "./Footer";

//Componente principal donde se manejan los estados.

function Principal() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [environment, setEnvironment] = useState([]);
  const [area, setArea] = useState([]);
  const [country, setCountry] = useState([]);
  const [environmentToFilter, setEnvironmentToFilter] = useState("");
  const [areasToFilter, setAreasToFilter] = useState("");
  const [countryToFilter, setCountryToFilter] = useState("");
  const [policyIDsToFilter, setPolicyIDsToFilter] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  //Este efecto se utiliza para cargar los datos provinientes de la API.
  //Seteamos los datos una vez se completa la llamada a la API.
  //Procesa los datos para obtener:
  //- La pagincación
  //- Los distintos filtros.

  useEffect(() => {
    GetDataFromJson().then(({ dataArray }) => {
      const transformedData = dataArray.map((item) => {
        const [itemEnv, itemArea, itemCountry] = item.relativePath.split("/");
        return { ...item, itemEnv, itemArea, itemCountry };
      });
      const arrayProcessed = GetPagination(transformedData);
      setData(arrayProcessed);
      setDataFiltered(arrayProcessed);
      setTotalPages(arrayProcessed.length);
      const { filteredArea, filteredEnvironment, filteredCountry } =
        GetFilter(dataArray);
      setEnvironment(filteredEnvironment);
      setArea(filteredArea);
      setCountry(filteredCountry);
    });
  }, []);

  //Este efecto se lanza cuando los filtros cambian, aplicándolos
  //para filtrar los datos.

  useEffect(() => {
    const newDataFiltered = data
      .flat()
      .filter(
        (item) =>
          environmentToFilter === "" || environmentToFilter === item.itemEnv
      )
      .filter((item) => areasToFilter === "" || areasToFilter === item.itemArea)
      .filter(
        (item) => countryToFilter === "" || countryToFilter === item.itemCountry
      )
      .filter(
        (item) =>
          policyIDsToFilter === "" || item.policyId.includes(policyIDsToFilter)
      );
    const arrayProcessed = GetPagination(newDataFiltered);
    setTotalPages(arrayProcessed.length);
    setPage(1);
    setDataFiltered(arrayProcessed);
  }, [environmentToFilter, areasToFilter, countryToFilter, policyIDsToFilter]);

  return (
    <>
      <Header />
      <main className="main">
        <Filters
          environment={environment}
          area={area}
          country={country}
          policyID={policyIDsToFilter}
          onChangeEnvironment={(e) => setEnvironmentToFilter(e.target.value)}
          onChangeArea={(e) => setAreasToFilter(e.target.value)}
          onChangeCountry={(e) => setCountryToFilter(e.target.value)}
          onChangePolicyID={(e) => setPolicyIDsToFilter(e.target.value)}
        />
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickAfter={() => {
            if (page < totalPages) {
              setPage(page + 1);
            }
          }}
          onClickPrevious={() => {
            if (page >= 2) {
              setPage(page - 1);
            }
          }}
        />
        <PrintList data={dataFiltered[page - 1]} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onClickAfter={() => {
            if (page < totalPages) {
              setPage(page + 1);
            }
          }}
          onClickPrevious={() => {
            if (page >= 2) {
              setPage(page - 1);
            }
          }}
        />
      </main>
      <Footer />
    </>
  );
}
export { Principal };
