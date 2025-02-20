import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound404 from "./pages/PageNotFound404";
import Layout from "./component/Layout";
import MusicDetailsCard from "./component/MusicDetailsCard";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/musicDetails/:id" element={<MusicDetailsCard/>} />
      <Route path="*" element={<PageNotFound404 />} />
    </Routes>
  );
}

export default App;
