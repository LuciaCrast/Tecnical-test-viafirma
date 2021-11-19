//Función para la extración de los datos de la API.
//La primera parte de la URL es un arreglo temporal del CORS
//para permitir el acceso a los datos de la API

function GetDataFromJson() {
  const ENDPOINT =
    "https://cors-anywhere.herokuapp.com/https://casupport.viafirma.com/info.json";
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((response) => {
      const dataArray = response.map((data) => {
        return {
          policyId: data.policyId,
          caName: data.caName,
          relativePath: data.relativePath,
          pemFiles: data.pemFiles.length,
        };
      });

      return { dataArray };
    });
}

export { GetDataFromJson };
