import { useState, useEffect } from "react";

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop()?.split(";").shift() || "");
  return null;
};

const useUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const cookieUser = getCookie("user");
    if (cookieUser) {
      try {
        setUser(JSON.parse(cookieUser));
      } catch (e) {
        console.error("Error parsing user cookie:", e);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  return user;
};

export default useUser;
