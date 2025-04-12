import * as L from "leaflet";
import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export interface MapContainerProps {
  center: L.LatLngExpression;
  zoom: number;
  maxZoom?: number;
  onClick?: (event: L.LeafletMouseEvent) => void;
}

function MapContainer({ center, zoom }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useMap(mapRef, { center, zoom });

  return <div ref={mapRef} className="h-full w-full"></div>;
}

export default MapContainer;
