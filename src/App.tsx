import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/general/Layout";
import BrandsPage from "./pages/BrandsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CouponsPage from "./pages/CouponsPage";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "./components/general/Loading";
import LoginPage from "./pages/LoginPage";
import SubCategoriesPage from "./pages/SubCategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

function ProtectedRoutes() {
  const token = Cookies.get("musc-admin-token");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:id" element={<SubCategoriesPage />} />
        <Route path="brands" element={<BrandsPage />} />
        <Route path="coupons" element={<CouponsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
