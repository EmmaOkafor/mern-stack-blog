import IndexPage from "./blog/IndexPage"
import LoginPage from "./blog/LoginPage"
import RegisterPage from "./blog/RegisterPage"
import Layout from "./blog/Layout"
import Contact from "./blog/Contact"
import About from "./blog/About"
import Write from "./blog/Write"
import Logout from "./blog/Logout"
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
