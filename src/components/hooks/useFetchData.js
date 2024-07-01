import { useEffect, useState } from "react";

export const useFetchData = () => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  const randomImage = () => {
    return "https://picsum.photos/200?random=" + Math.random(6, 1000);
  }

  const getData = async () => {
    try{
      const response = await fetch("https://jsonplaceholder.org/users");
      const data = await response.json();
      setData(data);
      setIsLoading(false)
    }catch(error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading
  }
}