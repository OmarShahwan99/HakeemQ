import Home from "./pages/Home/Home";
import LoginPage from "./pages/User/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";
import DoctorProfile from "./pages/DoctorsPage/DoctorProfile/DoctorProfile";
import Dashboard from "./pages/dashboard/Dashboard";

import AuthContext from "./store/auth-context";
import { useContext } from "react";
import Appoitments from "./components/dashboard/appoitments/Appoitments";
import Profile from "./components/dashboard/profile/Profile";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import SessionRoom from "./pages/SessionRoom/SessionRoom";

import "react-loading-skeleton/dist/skeleton.css";
import Main from "./components/dashboard/main/Main";
import UserRegisterPage from "./pages/User/UserRegisterPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import AppointmentsPage from "./pages/Admin/AppointmentsPage";
import UsersPage from "./pages/Admin/UsersPage";
import DoctorsListPage from "./pages/Admin/DoctorsListPage";
import SpecialistPage from "./pages/SpecialistPage/SpecialistPage";
import DoctorLoginPage from "./pages/DoctorLoginPage/DoctorLoginPage";
import UserDashboard from "./pages/User/UserProfile";
import UserAppointments from "./pages/User/UserAppointments";

import { useEffect } from "react";

import aos from "aos";

import "aos/dist/aos.css";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/doctors/:drId" element={<DoctorProfile />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/doctor-register" element={<RegisterPage />} />

      <Route path="/doctor-login" element={<DoctorLoginPage />} />
      <Route path="/spzs/:id" element={<SpecialistPage />} />
      {!authCtx.isActive && (
        <Route path="/user-register" element={<UserRegisterPage />} />
      )}
      {!authCtx.isAuth && (
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="appoitments" element={<Appoitments />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}
      {!authCtx.isAuth && (
        <Route path="/dashboard" element={<Navigate to="/dashboard/main" />} />
      )}
      {authCtx.isAuth && (
        <Route path="/user/*" element={<UserDashboard />}>
          <Route path="appointments" element={<UserAppointments />} />
          <Route path="profile" element={<>Profile</>} />
        </Route>
      )}
      {authCtx.isAuth && (
        <Route path="/user" element={<Navigate to="/user/appointments" />} />
      )}
      {/* <Route path="/room" element={<PreparingRoom />} /> */}
      {authCtx.isAuth && (
        <Route path="/room/session" element={<SessionRoom />} />
      )}
      <Route path="/admin/*" element={<AdminDashboard />}>
        <Route path="admin-doctors" element={<DoctorsListPage />} />
        <Route path="admin-appointments" element={<AppointmentsPage />} />
        <Route path="admin-users" element={<UsersPage />} />
      </Route>
      <Route path="/admin" element={<Navigate to="/admin/admin-doctors" />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
    </Routes>
  );
}

export default App;
