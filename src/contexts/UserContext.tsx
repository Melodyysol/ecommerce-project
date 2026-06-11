import { useEffect, useState, type ReactNode } from "react";
import { UserContext } from "../hooks/useUser";
import type { User } from "../types/types";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
