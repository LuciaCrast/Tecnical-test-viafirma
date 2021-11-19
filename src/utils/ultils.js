//Funciones reusables

//Función para la obtención de la paginación de 100 en 100 elementos.

function GetPagination(array) {
  const newArray = [];
  for (let i = 0; i < array.length / 100; i++) {
    newArray.push(array.slice(i * 100, 100 * (i + 1)));
  }
  return newArray;
}

//Función para la obtención de los filtros extraídos de los
//RelativePath

function GetFilter(array) {
  const filteredEnvironment = [];
  const filteredArea = [];
  const filteredCountry = [];
  array.forEach((item) => {
    const relativePathParts = item.relativePath.split("/");
    if (!filteredEnvironment.includes(relativePathParts[0])) {
      filteredEnvironment.push(relativePathParts[0]);
    }
    if (!filteredArea.includes(relativePathParts[1])) {
      filteredArea.push(relativePathParts[1]);
    }
    if (!filteredCountry.includes(relativePathParts[2])) {
      filteredCountry.push(relativePathParts[2]);
    }
  });
  return {
    filteredEnvironment,
    filteredArea,
    filteredCountry,
  };
}

export { GetPagination, GetFilter };
