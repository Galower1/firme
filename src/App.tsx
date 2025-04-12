import MapContainer from "./components/MapContainer";
import * as L from "leaflet";

function App() {
  const handleMapClick = (event: L.LeafletMouseEvent) => {
    console.log(event);
  };

  return (
    <div className="h-screen overflow-hidden">
      <MapContainer
        onClick={handleMapClick}
        center={[-17.4201732, -66.1292966]}
        zoom={13}
      />
    </div>
  );
}

export default App;
