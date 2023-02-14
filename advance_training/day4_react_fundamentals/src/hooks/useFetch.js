import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const handleResponse = (response) => {
  return wait(2000).then(() => {
    // console.log(response.ok);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  });
};

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleErr(err) {
    setError(true);
    setIsLoading(false)
  }

  useEffect(() => {
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(handleErr);
  }, []);

  return {data, error, isLoading};
}
