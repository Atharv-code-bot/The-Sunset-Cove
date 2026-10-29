import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import RoomDetails from "./pages/RoomDetails";
import RestaurantPage from "./pages/RestaurantPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:slug" element={<ActivityDetail />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
