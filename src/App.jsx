import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import ServicesPage from "./pages/servicespage";
import ProjectPage from "./pages/projectpage";
// import ProjectForm from "./pages/admin/ProjectForm";
import AboutUsPage from "./pages/aboutuspage";
import ContactPage from "./pages/contactpage";
import ErrorPage from "./pages/errorpage";
import NavbarComponent from "./components/NavbarComponent";
import AdminLogin from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboardPage";
import ProyectoForm from "./pages/admin/ProjectFormPage";
import ProjectDetail from "./pages/ProjectDetailPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/proyectos" element={<ProjectPage />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        {/* comienzo del admin */}
        {/* Ruta publica para login */}
        <Route path="/admin" element={<AdminLogin />} />
        {/* Ruta Protegida */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/nuevo"
          element={
            <PrivateRoute>
              <ProyectoForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/editar/:id"
          element={
            <PrivateRoute>
              <ProyectoForm />
            </PrivateRoute>
          }
        />
        {/*Fin Ruta Protegida */}
        {/* fin del admin */}
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
