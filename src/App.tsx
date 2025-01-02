import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./components/general/Layout";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/categories" />} />
          <Route index path="/categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
