import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUserAuth } from "../UserContext";
import Home from "../components/Home";

export default function AuthorizedRoutes() {
    const { user } = useUserAuth();
    if (!user) {
      return <Navigate to="/login" />;
    }

    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main>
              <p>Not found.</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}