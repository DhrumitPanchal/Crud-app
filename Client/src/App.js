import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUser from "./pages/AddUser";
import UpDateUser from "./pages/UpDateUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpDateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
