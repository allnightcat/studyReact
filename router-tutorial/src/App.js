import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Prpfile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPages from "./pages/MyPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/myPage" element={<MyPages />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
