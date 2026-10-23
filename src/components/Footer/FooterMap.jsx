import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Neware, Maharashtra 415620
const position = [17.1045364, 73.2906199];

const FooterMap = () => (
  <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}
    zoomControl={false}
    attributionControl={false}
    className="footer-map h-full w-full"
    style={{ background: "#26180f" }}
  >
<TileLayer
  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  maxZoom={19}
/>
    {/* Soft halo */}
    <CircleMarker
      center={position}
      radius={18}
      pathOptions={{ color: "#fdd17c", fillColor: "#fdd17c", fillOpacity: 0.2, weight: 0 }}
    />

    {/* Marker */}
    <CircleMarker
      center={position}
      radius={8}
      pathOptions={{ color: "#26180f", fillColor: "#fdd17c", fillOpacity: 1, weight: 3 }}
    />
  </MapContainer>
);

export default FooterMap;