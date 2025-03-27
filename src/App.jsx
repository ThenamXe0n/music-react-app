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
import MusicDetailsCard from "./component/MusicDetailsCard";
import UpdateSongPage from "./pages/UpdateSongPage";
import ContextPage from "./pages/ContextPage";
import { DataContextApi } from "./context/DataContext";
import { createContext, useState } from "react";
import AddMoviePage from "./pages/AddMoviePage";
import MovieDetailsCard from "./component/movieCard/MovieDetailsCard";

export const GlobalStatesContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
    const [contentToShow, setContentToShow] = useState("musics");
    const [isEdit, setIsEdit] = useState(false);
  
  console.log("from main app ",theme)
  Notiflix.Notify.init({
    position: "center-top",
    clickToClose: true,
    cssAnimationStyle: "from-bottom",
  });
  return (
    <GlobalStatesContext.Provider value={{ theme, setTheme ,contentToShow,setContentToShow,isEdit,setIsEdit}}>
      {" "}
      <Routes>
        {/* ///-------------------protected pages --------------------- */}
        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/test"
            element={
              <DataContextApi.Provider
                value={{ data: "hi", prateekNumber: "9887988798798" }}
              >
                <ContextPage />
              </DataContextApi.Provider>
            }
          />
          <Route path="/add-song" element={<AddSongPage />} />
          <Route path="/add-movie" element={<AddMoviePage/>} />
          <Route path="/update-song" element={<UpdateSongPage />} />
          <Route path="/song/:id" element={<MusicDetailsCard />} />
          <Route path="/movie/:id" element={<MovieDetailsCard/>}/>
        </Route>

        {/* ///////----------------------public page------------------------ */}
        <Route path="/hi" element={<h1>hellow</h1>} />

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
    </GlobalStatesContext.Provider>
  );
}

export default App;
