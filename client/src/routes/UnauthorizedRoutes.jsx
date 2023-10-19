import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";

export default function UnauthorizedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
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