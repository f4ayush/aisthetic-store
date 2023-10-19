import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import { useUserAuth } from "./UserContext";
function App() {
  const { user, loading } = useUserAuth();
  
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <AuthorizedRoutes />
      ) : (
        <UnauthorizedRoutes />
      )}
    </div>
  );
}

export default App;
