import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import UseContext from "./pages/UseContext";
import ContextHome from "./components/ContextHome";
import Profile from "./components/Profile";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Rijo George");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>THIS IS AN ERROR PAGE</h1>} />
            <Route path="/useContext" element={<UseContext />} />
            <Route path="/contextHome" element={<ContextHome />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <footer>This is footer</footer>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
