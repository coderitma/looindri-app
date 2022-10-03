import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from "react-router-dom";

const Confirm = () => {
  return (
    <>
      <h1>Kamu belum login!</h1>
      <p>Untuk login, klik <Link to="/login">login</Link></p>
    </>
  )
}

const AuthGuard = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
    }
  }, [])

  return (isAuthenticated ? <Outlet />: <Confirm />)
}

const Dashboard = () => {
  return <h1>Dashboard</h1>
}

const Login = () => {
  return <h1>Login</h1>
}

const Profile = () => {
  return <h1>Profile</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthGuard />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
