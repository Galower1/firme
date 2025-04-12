import React, { useEffect, useRef } from "react";
import { MapContainerProps } from "../components/MapContainer";
import * as L from "leaflet";

export function useMap(
  mapRef: React.RefObject<HTMLDivElement>,
  { center, zoom }: MapContainerProps
) {
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = L.map(mapRef.current!);
    map.setView(center, zoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    leafletMap.current = map;

    return () => {
      map.remove();
    };
  }, []);

  return leafletMap;
}
