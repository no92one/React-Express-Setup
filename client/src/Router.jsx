import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./validation/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";

export default function Router() {
  return <>
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
}
