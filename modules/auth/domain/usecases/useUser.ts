import { useEffect, useState } from "react";

export function getLocalStorageUser(name:string) {
  const user = localStorage.getItem(name);
  if (!user) return;
  try {
    return JSON.parse(user);
  } catch (err) {}
}

export function removeItemLocalStorage (item : string) : void {
  localStorage.removeItem(item)
}

export default function useUser() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(getLocalStorageUser("user"));

    if (window) {
      window.onstorage = () => {
        setUser(getLocalStorageUser("user"));
      };
    }
    return () => {
      window.onstorage = null;
    };
  }, []);

  return { user };
}
