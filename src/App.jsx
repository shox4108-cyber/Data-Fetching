import { Navigate, Route, Routes, useLocation, useMatch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/usersSlice/usersSlice";

function App() {
  const vantaBirdsRef = useRef(null);
  const location = useLocation()
  const hideNavbarPaths = ["/not-found"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const dispatch = useDispatch()

  useEffect(() => {
    if (vantaBirdsRef.current) {
      window.VANTA.BIRDS({
        el: vantaBirdsRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }
  }, [location]);

  useEffect(() => {
    dispatch(getUsers)
  }, [dispatch])
  

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todos" element={<Todos vantaBirdsRef={vantaBirdsRef} />} />
        <Route path="/users" element={<Users vantaBirdsRef={vantaBirdsRef} />} />
        <Route path="/posts" element={<Posts vantaBirdsRef={vantaBirdsRef} />} />
        <Route path="/:type/:id" element={<Details vantaBirdsRef={vantaBirdsRef} />} />
        <Route path="/not-found"  element={<NotFound/>} />
        <Route path="*"  element={<Navigate to={'/not-found'}/>} />
      </Routes>
    </>
  );
}

export default App;
