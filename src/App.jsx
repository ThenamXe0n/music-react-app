import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound404 from "./pages/PageNotFound404";
import Layout from "./component/Layout";
import MusicDetailsCard from "./component/MusicDetailsCard";
import Tab from "./component/practiceComponent/Tab";
import Test from "./component/Test";
import RecipesCardSection from "./component/recipes/RecipesCardSection";
import RefHook from "./hooks/RefHook";
import TodoList from "./pages/TodoList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Route>
      <Route path="/musicDetails/:id" element={<MusicDetailsCard />} />
      <Route path="/test" element={<RefHook/>} />
      <Route path="/todo" element={<TodoList/>} />
    </Routes>
  );
}

export default App;
