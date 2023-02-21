import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HomeLayout from "./pages/HomeLayout";
import JobDetail from "./components/JobDetail";
import { useLocation } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import AuthContext from "./auth/AuthContext";

export default function App() {
  let location = useLocation();
  let state = location.state;
  const auth = useContext(AuthContext);
  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {state && auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<JobDetail />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginModal />}></Route>
        </Routes>
      )}
    </>
  );
}
