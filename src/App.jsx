

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import RoomDetails from "./pages/RoomDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:slug" element={<ActivityDetail />} />
        {/* Dynamic Room Pages */}
      <Route path="/rooms/:roomId" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

