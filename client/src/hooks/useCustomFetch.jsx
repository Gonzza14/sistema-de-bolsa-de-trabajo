import { helpHttp } from "../helpers/helpHttp";
import { useState, useEffect } from "react";

export const useCustomFetch = (url) => {
  const [dataBase, setDatabase] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setLoading(true);
        console.log(res)
        if (!res.err) {
          setDatabase(res);
          setError(null);
        } else {
          setDatabase(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const verificarData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    setLoading(true);
    helpHttp()
      .post(url, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          console.log(res);
        } else {
          setError(res);
          setLoading(false);
        }
      });
  };

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    setLoading(true);
    helpHttp()
      .post(url, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDatabase([...dataBase, res]);
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 4000);
        } else {
          setError(res);
          setLoading(false);
        }
      });
  };

  const subirArchivo = (data, file) => {
    data.id = Date.now();
    // Crear un objeto FormData y agregar los datos y el archivo
		const formData = new FormData();
		formData.append("data", JSON.stringify(data));
		formData.append("archivoExamen", file);
		
		let options = {
			body: formData,
			headers: {
				"Accept": "application/json",
				"type": "formData",
			},
		};
		
    setLoading(true);

    helpHttp()
      .post(url, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDatabase([...dataBase, res]);
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 4000);
        } else {
          setError(res);
          setLoading(false);
        }
      });
  };

	const updateSubirArchivo = (data, file) => {
		let endpoint = `${url}/${data.id}`;
		// Create a FormData object and append the data and file
		const formData = new FormData();
		formData.append("data", JSON.stringify(data));
		formData.append("archivoExamen", file);
		let options = {
			body: formData,
			headers: {
				"Accept": "application/json",
				"type": "formData",
			},
		};
	
		setLoading(true);
		helpHttp()
			.put(endpoint, options)
			.then((res) => {
				if (!res.err) {
					console.log(res)
					setDatabase(res);
					setLoading(false);
					setResponse(true);
					setTimeout(() => setResponse(false), 4000);
				} else {
					setError(res);
					setLoading(false);
				}
			});
	};
	

  const createDataEmpty = () => {
    setLoading(true);
    helpHttp()
      .post(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDatabase(res);
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 4000);
        } else {
          setError(res);
          setLoading(false);
        }
      });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    setLoading(true);
    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = dataBase.map((el) => (el.id === data.id ? data : el));
          setDatabase(newData);
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 4000);
        } else {
          setError(res);
          setLoading(false);
        }
      });
  };

  const updateDataSolicitante = (data, file) => {
    //console.log(endpoint);
		// Create a FormData object and append the data and file
		const formData = new FormData();
		formData.append("data", JSON.stringify(data));
		formData.append("fotoDePerfil", file);
		let options = {
			body: formData,
			headers: {
				"Accept": "application/json",
				"type": "formData",
			},
		};
	
		setLoading(true);
		helpHttp()
			.put(url, options)
			.then((res) => {
				if (!res.err) {
					console.log(res)
					setDatabase(res);
					setLoading(false);
					setResponse(true);
					setTimeout(() => setResponse(false), 4000);
				} else {
					setError(res);
					setLoading(false);
				}
			});
  };

  const deleteData = (id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .del(endpoint, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = dataBase.filter((el) => el.id !== id);
          setDatabase(newData);
          setResponse(true);
          setTimeout(() => setResponse(false), 4000);
        } else {
          setError(res);
        }
      });
  };

  const handleClick = (e) => {
    setResponse(false);
  };

  return {
    dataBase,
    dataToEdit,
    setDataToEdit,
    createData,
    createDataEmpty,
    updateData,
    deleteData,
    error,
    loading,
    response,
    setResponse,
    handleClick,
    verificarData,
    subirArchivo,
		updateSubirArchivo,
    updateDataSolicitante,
  };
};
