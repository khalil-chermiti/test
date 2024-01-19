import { Route, Routes } from "react-router-dom";
import Places from "./pages/Places";
import Place from "./pages/Place";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="/place/:id" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
