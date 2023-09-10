import axios from "axios";
import { useState } from "react";

const useHttp = () => {
  const [getResData, setGetResData] = useState(null);
  const [postResData, setPostResData] = useState(null);

  const getRequest = async (getConfit) => {
    try {
      const response = await axios.get(getConfit.url, {
        headers: getConfit.headers,
      });
      const getData = await response.data;
      setGetResData(getData);
    } catch {}
  };

  const postRequest = async (postConfig) => {
    try {
      const response = await axios.post(postConfig.url, postConfig.postData, {
        headers: postConfig.headers,
      });
      const postData = await response.data;
      setPostResData(postData);
    } catch {}
  };

  return {
    getRequest,
    postRequest,
    getResData,
    postResData,
  };
};

export default useHttp;
