import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css'
import "./resetStyle.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="articles" element={<Articles />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
