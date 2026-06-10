// import { createContext, use, useState, ReactNode } from "react";


// export const AuthContext = createContext<{
//   currentUser: { username: string; email: string } | null;
//   setCurrentUser: (user: { username: string; email: string } | null) => void;
// }>({
//   currentUser: null,
//   setCurrentUser: () => {},
// });

// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [currentUser, setCurrentUser] = useState<{
//     username: string;
//     email: string;
//   } | null>(null);

//   return (
//     <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
