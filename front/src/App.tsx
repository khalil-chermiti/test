import { Route, Routes } from "react-router-dom";
import Places from "./pages/Places";
import Place from "./pages/Place";

function App() {
  return (
    <Routes>
      <Route path="/places" element={<Places />} />
      <Route path="/place/:id" element={<Place />} />
    </Routes>
  );
}

export default App;
