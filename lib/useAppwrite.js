// Custom Hook

import { useEffect, useState } from "react";
import { getAllPosts } from "./appwrite";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();

      setData(response);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch videos as soon as the screen loads or component mounts
  useEffect(() => {
    // We cannot make a top-level useEffect as async function
    fetchData();
  }, []);

  const refetch = () => fetchData();

  // console.log(data);
  return { data, isLoading, refetch };
};

export default useAppwrite;
