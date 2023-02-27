import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./app/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
