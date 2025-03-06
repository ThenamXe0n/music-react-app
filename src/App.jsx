import { Routes, Route, Outlet } from "react-router-dom";

import Notiflix from "notiflix";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/ResistrationPage";
import CheckLogin from "./routes/auth/CheckLogin";
import Protected from "./routes/auth/Protected";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Layout from "./component/Layout";
import AddSongPage from "./pages/AddSongPage";

function App() {
  Notiflix.Notify.init({
    position: "center-top",
    clickToClose: true,
    cssAnimationStyle: "from-bottom",
  });
  return (
    <Routes>
      {/* ///-------------------protected pages --------------------- */}
      <Route
        path="/"
        element={
          <Protected>
           <Layout/>
          </Protected>
        }
      >
        <Route index element={<Home />} />
        <Route path="/add-song" element={<AddSongPage/>}/>
      </Route>

      {/* ///////----------------------public page------------------------ */}
      <Route path="/hi" element={<h1>hellow</h1>}/>

      <Route
        path="/login"
        element={
          <CheckLogin>
            <LoginPage />
          </CheckLogin>
        }
      />
      <Route
        path="/register"
        element={
          <CheckLogin>
            <Registration />
          </CheckLogin>
        }
      />
    </Routes>
  );
}

export default App;
