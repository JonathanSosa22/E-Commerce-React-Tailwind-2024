/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getApi = (path) => {
    const url = `${baseUrl}${path}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setInfoApi(res.data);
        setHasError(false);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return [infoApi, getApi, hasError, isLoading];
};

export default useFetch;
