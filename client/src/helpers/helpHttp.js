export const helpHttp = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    console.log(options);

    try {
      let res = await fetch(endpoint, options);

      if (!res.ok) {
        throw {
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrio un error",
        };
      }
      return await res.json();
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Exitosamente cancelado");
      } else {
        console.log(`${err}, Algo salio mal con la peticion `);
      }
    }
  };

  const get = async (url, options = {}) => await customFetch(url, options);

  const post = async (url, options = {}) => {
    options.method = "POST";
    return await customFetch(url.options);
  };

  const put = async (url ,options = {}) => {
    options.method = "PUT";
    return await customFetch(url.options);
  };

  const del = async (url, options = {}) => {
    options.method = "DELETE";
    return await customFetch(url.options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
