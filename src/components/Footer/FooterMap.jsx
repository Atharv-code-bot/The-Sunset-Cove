import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Neware, Maharashtra 415620
const HOTEL = [17.1045364, 73.2906199];

const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${HOTEL[0]},${HOTEL[1]}`;
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${HOTEL[0]},${HOTEL[1]}`;

// Straight-line distance in km (haversine)
const toRad = (d) => (d * Math.PI) / 180;
const straightLineKm = (a, b) => {
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const formatDuration = (min) =>
  min >= 60 ? `${Math.floor(min / 60)} h ${min % 60} min` : `${min} min`;

// Fixes blank/misaligned tiles (map sits inside an animated container)
// and zooms to fit both points once the visitor's location is known.
const MapController = ({ user }) => {
  const map = useMap();

  useEffect(() => {
    const refresh = () => map.invalidateSize();
    const t1 = setTimeout(refresh, 300);
    const t2 = setTimeout(refresh, 1500);
    window.addEventListener("resize", refresh);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", refresh);
    };
  }, [map]);

  useEffect(() => {
    if (user) map.fitBounds([HOTEL, user], { padding: [35, 35] });
  }, [user, map]);

  return null;
};

const FooterMap = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [user, setUser] = useState(null);
  const [airKm, setAirKm] = useState(null);
  const [drive, setDrive] = useState(null); // { km, min }
  const [errorMsg, setErrorMsg] = useState("");

  const handleLocate = () => {
    if (!navigator.geolocation) {
      setStatus("error");
      setErrorMsg("Location is not supported on this device.");
      return;
    }

    setStatus("loading");
    setDrive(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const u = [pos.coords.latitude, pos.coords.longitude];
        setUser(u);
        setAirKm(straightLineKm(u, HOTEL));
        setStatus("done");

        // Optional: real driving distance/time (free OSRM demo server)
        try {
          const res = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${u[1]},${u[0]};${HOTEL[1]},${HOTEL[0]}?overview=false`,
          );
          const data = await res.json();
          const route = data?.routes?.[0];
          if (route) {
            setDrive({
              km: route.distance / 1000,
              min: Math.round(route.duration / 60),
            });
          }
        } catch {
          /* keep straight-line distance only */
        }
      },
      () => {
        setStatus("error");
        setErrorMsg("Please allow location access to see the distance.");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <div className="w-full">
      {/* MAP */}
      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-[#fdd17c]/30 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        <MapContainer
          center={HOTEL}
          zoom={13}
          scrollWheelZoom={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          zoomControl={false}
          attributionControl={false}
          className="footer-map h-full w-full"
          style={{ background: "#26180f" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          <MapController user={user} />

          {/* Line between visitor and hotel */}
          {user && (
            <Polyline
              positions={[user, HOTEL]}
              pathOptions={{
                color: "#fdd17c",
                weight: 3,
                dashArray: "6 8",
              }}
            />
          )}

          {/* Visitor */}
          {user && (
            <CircleMarker
              center={user}
              radius={8}
              pathOptions={{
                color: "#26180f",
                fillColor: "#ebe7dc",
                fillOpacity: 1,
                weight: 3,
              }}
            />
          )}

          {/* Hotel halo + marker */}
          <CircleMarker
            center={HOTEL}
            radius={18}
            pathOptions={{
              color: "#fdd17c",
              fillColor: "#fdd17c",
              fillOpacity: 0.2,
              weight: 0,
            }}
          />
          <CircleMarker
            center={HOTEL}
            radius={8}
            pathOptions={{
              color: "#26180f",
              fillColor: "#fdd17c",
              fillOpacity: 1,
              weight: 3,
            }}
          />
        </MapContainer>

        {/* Click anywhere on the map to open Google Maps */}
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open The Sunset Cove in Google Maps"
          className="absolute inset-0 z-[1000] flex items-end justify-end p-3"
        >
          <span className="rounded-full bg-[#26180f]/85 px-3 py-[6px] text-[12px] text-[#fdd17c]">
            Open in Google Maps ↗
          </span>
        </a>
      </div>

      <p className="mt-[10px] text-[11px] text-[#ebe7dc]/50">
        © OpenStreetMap contributors
      </p>

      {/* DISTANCE */}
      <div className="mt-[14px] flex flex-col items-start gap-[10px]">
        <button
          type="button"
          onClick={handleLocate}
          disabled={status === "loading"}
          className="rounded-full border border-[#fdd17c] px-[20px] py-[9px] text-[14px] text-[#fdd17c] transition-colors duration-300 hover:bg-[#fdd17c] hover:text-[#26180f] disabled:opacity-60"
        >
          {status === "loading" ? "Finding you..." : "Show distance from me"}
        </button>

        {status === "done" && airKm !== null && (
          <p className="text-[14px] leading-[1.5] text-[#ebe7dc]">
            {drive ? (
              <>
                About{" "}
                <span className="text-[#fdd17c]">{drive.km.toFixed(1)} km</span>{" "}
                by road ({formatDuration(drive.min)} drive)
              </>
            ) : (
              <>
                About{" "}
                <span className="text-[#fdd17c]">{airKm.toFixed(1)} km</span>{" "}
                away (straight line)
              </>
            )}
          </p>
        )}

        {status === "error" && (
          <p className="text-[13px] text-[#ebe7dc]/70">{errorMsg}</p>
        )}

        <a
          href={DIRECTIONS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center justify-center rounded-full border border-[#fdd17c] px-[20px] py-[9px] text-[14px] text-[#fdd17c] transition-colors duration-300 hover:bg-[#fdd17c] hover:text-[#26180f]"
        >
          Get directions
        </a>
      </div>
    </div>
  );
};

export default FooterMap;
