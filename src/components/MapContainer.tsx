import * as L from "leaflet";
import { createContext, useContext, useRef } from "react";
import { useMap } from "../hooks/useMap";

export interface MapContainerProps {
  center: L.LatLngExpression;
  zoom: number;
  children?: React.ReactNode;
  maxZoom?: number;
  onClick?: (event: L.LeafletMouseEvent) => void;
}

const MapContext = createContext<L.Map | null>(null);

export function useMapContext() {
  return useContext(MapContext);
}

function MapContainer({
  center,
  zoom,
  children,
  maxZoom = 19,
  onClick,
}: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useMap(mapRef, { center, zoom, maxZoom, onClick });

  return (
    <MapContext.Provider value={leafletMap.current}>
      <div ref={mapRef} className="h-full w-full">
        {children}
      </div>
    </MapContext.Provider>
  );
}

export default MapContainer;
