import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./app/home/Home";
import Sites from "./app/sites/Sites";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sites" element={<Sites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
