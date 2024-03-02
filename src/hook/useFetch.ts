import axios from "axios";
import useSWR from "swr";


const fetch = async (url: string) => {
    const response = await axios.get(url);
    return response.data;

};

export const useFetchUser = (name:string) => {
  const { data, error, isValidating , isLoading} = useSWR(`http://localhost:3004/user/?name=${name}`, fetch,);

  return { data, error, isValidating, isLoading };
};
