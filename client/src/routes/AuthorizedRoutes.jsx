import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUserAuth } from "../UserContext";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import MyComponent from "../components/MyComponent";
import StoreDetails from "../components/StoreDetails";

export default function AuthorizedRoutes() {
    const { user } = useUserAuth();
    if (!user) {
      return <Navigate to="/login" />;
    }

    return (
    <Router>
        <Navbar/>
        {/* <MyComponent /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store-details/:storeId" element={<StoreDetails />} />
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