import axios from "axios";
import React from "react";
import { useState } from "react";

const ApiContext = React.createContext({
  isLoading: false,
  error: null,
  sendRequest: ({ url, method, data, headers }) => {},
});

const baseURL = "http://192.168.43.7:8000/api";

export const ApiContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async ({
    url,
    method = "GET",
    data = null,
    headers = {},
  }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: `${baseURL}${url}`,
        method: method,
        headers: headers,
        data: data,
      });
      const responseData = response.data;
      setIsLoading(false);
      return responseData;
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      throw error;
    }
  };

  const apiContextValue = {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
