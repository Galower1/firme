import MapContainer from "./components/MapContainer";
import * as L from "leaflet";
// import MapMarker from "./components/MapMarker";

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
      >
        {/* <MapMarker position={[-17.4201732, -66.1292966]} /> */}
      </MapContainer>
    </div>
  );
}

export default App;
