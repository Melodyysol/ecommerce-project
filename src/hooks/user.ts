import { createContext } from "react";
import type { User } from "../types/types";

type UserContextType = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType| undefined>(undefined)