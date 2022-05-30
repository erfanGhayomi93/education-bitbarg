import { getLocalStorageUser } from "@/modules/auth/domain/usecases/useUser";
import { useEffect, useState } from "react";

 const useToken = () =>  {
    const [token, setToken] = useState();
    useEffect(() => {
      setToken(getLocalStorageUser("token"));
  
      if (window) {
        window.onstorage = () => {
          setToken(getLocalStorageUser("token"));
        };
      }
      return () => {
        window.onstorage = null;
      };
    }, []);
  
    return { token };
  }

  export default useToken