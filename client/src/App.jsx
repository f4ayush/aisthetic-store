import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import { useUserAuth } from "./UserContext";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { StoreContextProvider } from "./StoreContextProvider";
function App() {
  const { user, loading } = useUserAuth();
  
  return (
    <StoreContextProvider>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <AuthorizedRoutes />
      ) : (
        <UnauthorizedRoutes />
      )}
    </StoreContextProvider>
  );
}

export default App;
