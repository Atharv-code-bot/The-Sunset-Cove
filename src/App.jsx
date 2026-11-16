import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import RoomDetails from "./pages/RoomDetails";
import RestaurantPage from "./pages/RestaurantPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:slug" element={<ActivityDetail />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
