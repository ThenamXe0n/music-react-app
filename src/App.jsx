
import { Routes, Route } from "react-router-dom";

import Notiflix from "notiflix";
import LoginPage from "./pages/LoginPage";

function App() {
  Notiflix.Notify.init({
    position:"center-top",
    clickToClose:true,
    cssAnimationStyle:"from-bottom"
  })
  return (
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
