import axios from "axios";
import useSWR from "swr";


const fetch = (url: string) => axios.get(url).then((res) => res.data);

export const useFetchUser = (name:string) => {
  const { data, error } = useSWR(`http://localhost:3004/user/?name=${name}`, fetch);
  {data && console.log(data)}
  return { data, error };
};
