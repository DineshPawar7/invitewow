import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import TemplateListPage from "./pages/TemplateListPage";
import TemplateEditPage from "./pages/TemplateEditPage";
import AboutUs from "./pages/static/AboutUs";
import Careers from "./pages/static/Careers";
import Blog from "./pages/static/Blog";
import Press from "./pages/static/Press";
import Community from "./pages/static/Community";
import HelpCenter from "./pages/static/HelpCenter";
import LiveChat from "./pages/static/LiveChat";
import ContactUs from "./pages/static/contactUs";
import Documentation from "./pages/static/Documentation";
import Tutorials from "./pages/static/Tutorials";
import Templetes from "./pages/static/Templates";
import Inspiration from "./pages/static/Inspiration";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/templates/:categorySlug" element={<TemplateListPage />} />
        <Route
          path="/edit/:categorySlug/:templateId"
          element={<TemplateEditPage />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/templates" element={<Templetes />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Layout>
  );
}

export default App;
