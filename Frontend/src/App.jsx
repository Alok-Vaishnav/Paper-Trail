import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/Notes/NotesState";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Footer from "./Components/Footer";
// import ParticlesBackground from "./Components/ParticlesBackground";
import { Toaster } from "react-hot-toast";
import "./App.css";
function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Toaster
          position="top-right"
          background="#060417"
          reverseOrder={false}
        />
        <div className="container">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;
