"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapComponent() {
  const mapRef = useRef<MapRef | null>(null);

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setViewport(prev => ({
            ...prev,
            latitude,
            longitude,
            zoom: 13
          }));

          // 👇 flyTo on the map when user's location is available
          mapRef.current?.flyTo({
            center: [longitude, latitude],
            zoom: 13,
            speed: 1.6,
            curve: 1,
            easing: t => t
          });
        },
        () => {
          setError("Location permission denied or unavailable.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div id="map" className="map-container">
      <div className="map-frame">
        <div className="map-inner">
          <div className="map-window-controls flex justify-between p-2">
            <div className="map-dots flex gap-1">
              <div className="map-dot dot-red w-3 h-3 rounded-full bg-red-500" />
              <div className="map-dot dot-yellow w-3 h-3 rounded-full bg-yellow-500" />
              <div className="map-dot dot-green w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-500">MyRoomie Map Demo</span>
          </div>

          <div className="map-text h-[500px]">
            <Map
              ref={mapRef}
              mapboxAccessToken={MAPBOX_TOKEN}
              initialViewState={viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              style={{ width: "100%", height: "100%" }}
              onMove={evt => setViewport(evt.viewState)}
              
            >
              {userLocation && (
                <>
                  <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
                    <MapPin className="w-8 h-8 text-green-600" />
                  </Marker>
                  <Popup
                    latitude={userLocation.latitude}
                    longitude={userLocation.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="top"
                  >
                    <div className="text-sm">You're here! 🎯</div>
                  </Popup>
                </>
              )}
              {error && (
                <Popup latitude={viewport.latitude} longitude={viewport.longitude} closeOnClick={false}>
                  <div className="text-sm text-red-500 max-w-[200px]">{error}</div>
                </Popup>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}
