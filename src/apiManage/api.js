import axios from "axios";

const ACCES_tOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2JlYjkxMDYxOWFmODcwZWE0MzAxNmMxYTcyZTMxMSIsIm5iZiI6MTcxOTU3MTU5OS45MDg1MTksInN1YiI6IjY2NzcyYThjZjRhNTI5ZjBkOWVkMzAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2NDxX0pDLnqHvoDK2o8WL27YiyAe6U8EHAiNVB30mBA";

export async function searchAPI(endpoint, params) {
  //Instanciando clase URL en la variable url
  //Construyendo la URL con el endpoint
  const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);

  //Creando mis searchParams o queryStrings
  const searchParams = new URLSearchParams(params);

  //agregando la queryString a la URL
  url.search = searchParams;

  //Opteniendo la respuesta de la API
  const response = await axios.get(url.toString(), {
    headers: {
      Authorization: `Bearer ${ACCES_tOKEN}`,
    },
  });
  return response.data.results;
}
