import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/App.css";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main></main>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
