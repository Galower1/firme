import * as L from "leaflet";
import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export interface MapContainerProps {
  center: L.LatLngExpression;
  zoom: number;
}

function MapContainer({ center, zoom }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useMap(mapRef, { center, zoom });

  return (
    <div className="h-screen w-full">
      <div ref={mapRef} className="h-full w-full"></div>
    </div>
  );
}

export default MapContainer;
