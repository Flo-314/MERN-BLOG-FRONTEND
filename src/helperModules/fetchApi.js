const fetchApi = async (path, variable) => {
  let link = "https://floblogapi.herokuapp.com/api/" + path;

  //para no tener que poner la barrita cada vez
  if (variable) {
    link += "/" + variable;
  }
  let FetchedData = await fetch(link);

  const data = await FetchedData.json();

  return data;
};

export default fetchApi;
