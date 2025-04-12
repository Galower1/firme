import React, { useEffect, useRef } from "react";
import { MapContainerProps } from "../components/MapContainer";
import * as L from "leaflet";

const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export function useMap(
  mapRef: React.RefObject<HTMLDivElement>,
  { center, zoom, maxZoom, onClick }: Omit<MapContainerProps, "children">
) {
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = L.map(mapRef.current!);
    map.setView(center, zoom);

    L.tileLayer(TILE_LAYER_URL, {
      maxZoom,
      attribution: ATTRIBUTION,
    }).addTo(map);

    leafletMap.current = map;

    if (onClick) {
      map.on("click", onClick);
    }

    return () => {
      map.remove();
    };
  }, []);

  return leafletMap;
}
