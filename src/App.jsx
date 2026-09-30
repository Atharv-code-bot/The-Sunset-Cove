import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Dynamic Room Pages */}
      <Route path="/rooms/:roomId" element={<RoomDetails />} />
    </Routes>
  );
}

export default App;