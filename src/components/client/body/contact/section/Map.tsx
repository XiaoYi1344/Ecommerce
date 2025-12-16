'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface IconDefaultWithPrivate extends L.Icon.Default {
  _getIconUrl?: () => void;
}

const defaultIcon = L.Icon.Default.prototype as IconDefaultWithPrivate;
if (defaultIcon._getIconUrl) {
  delete defaultIcon._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    'leaflet/dist/images/marker-icon-2x.png',
    import.meta.url
  ).toString(),
  iconUrl: new URL(
    'leaflet/dist/images/marker-icon.png',
    import.meta.url
  ).toString(),
  shadowUrl: new URL(
    'leaflet/dist/images/marker-shadow.png',
    import.meta.url
  ).toString(),
});

export default function MapLeaflet() {
  const [mounted, setMounted] = React.useState(false);
  const center: [number, number] = [51.505, -0.09];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ height: 320, width: '100%' }}>
      <MapContainer
        center={center}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Our main office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
