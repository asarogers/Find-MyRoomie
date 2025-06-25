"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

// Dummy apartment data (can be replaced with API data)
const apartments = [
  { id: 1, name: "Rogers Edge Apartments", lat: 42.0082, lon: -87.6658 },
  { id: 2, name: "Loyola Flats", lat: 42.0007, lon: -87.6631 },
  { id: 3, name: "Sheridan Shores", lat: 41.9975, lon: -87.6712 },
  { id: 4, name: "Howard Street Lofts", lat: 42.0191, lon: -87.6754 },
];

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapComponent() {
  const mapRef = useRef<MapRef | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<number | null>(
    null
  );
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [viewport, setViewport] = useState({
    latitude: 42.0052992,
    longitude: -87.687168,
    zoom: 13,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setViewport((prev) => ({
            ...prev,
            latitude,
            longitude,
            zoom: 13,
          }));
          mapRef.current?.flyTo({
            center: [longitude, latitude],
            zoom: 13,
            speed: 1.6,
            curve: 1,
            easing: (t) => t,
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
              onMove={(evt) => setViewport(evt.viewState)}
            >
              {/* User location marker */}
              {userLocation && (
                <>
                  <Marker
                    latitude={userLocation.latitude}
                    longitude={userLocation.longitude}
                  >
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

              {/* Apartment markers */}
              {apartments.map((apartment) => (
                <Marker
                  key={apartment.id}
                  latitude={apartment.lat}
                  longitude={apartment.lon}
                  anchor="bottom"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setSelectedApartment(apartment.id);
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-white text-xs font-semibold text-gray-800 px-2 py-1 rounded-md shadow-md mb-1">
                      {apartment.name}
                    </div>
                    <MapPin className="w-6 h-6 text-blue-500 hover:text-blue-700 cursor-pointer" />
                  </div>
                </Marker>
              ))}

              {/* Apartment popup */}
              {selectedApartment &&
                (() => {
                  const apt = apartments.find(
                    (a) => a.id === selectedApartment
                  );
                  return (
                    apt && (
                      <Popup
                        latitude={apt.lat}
                        longitude={apt.lon}
                        closeButton={true}
                        onClose={() => setSelectedApartment(null)}
                        anchor="top"
                      >
                        <div className="text-sm font-semibold">{apt.name}</div>
                      </Popup>
                    )
                  );
                })()}

              {error && (
                <Popup
                  latitude={viewport.latitude}
                  longitude={viewport.longitude}
                  closeOnClick={false}
                >
                  <div className="text-sm text-red-500 max-w-[200px]">
                    {error}
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}
