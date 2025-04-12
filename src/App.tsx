import "./App.css";
import "leaflet/dist/leaflet.css";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <div className="h-screen">
      <MapContainer center={[51.5, -0.09]} zoom={13} />;
    </div>
  );
}

export default App;
