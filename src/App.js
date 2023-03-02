import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./app/home/Home";
import Sites from "./app/sites/Sites";
import "./App.css";
import Site from "./app/sites/Site";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/sites/:siteId" element={<Site />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
