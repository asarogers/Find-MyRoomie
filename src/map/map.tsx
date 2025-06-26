"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin, Navigation } from "lucide-react";
import fetchApartments from "../database/fetchApartments";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapComponent() {
  const mapRef = useRef<MapRef | null>(null);
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 42.0052992,
    longitude: -87.687168,
    zoom: 13,
  });

  useEffect(() => {
    const loadApartments = async () => {
      const data = await fetchApartments("IL");
      setApartments(data);
    };
    loadApartments();
  }, []);

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

  const ApartmentMarker = ({ apartment, isSelected, onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: isSelected ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          px: 1,
          py: 0.5,
          mb: 1,
          fontSize: "0.75rem",
          fontWeight: 600,
          textAlign: "center",
          maxWidth: "120px",
          border: "1px solid #ccc",
        }}
      >
        {apartment.name}
      </Paper>
      <Box sx={{ position: "relative", color: isSelected ? "error.main" : "primary.main" }}>
        <MapPin style={{ width: 32, height: 32 }} />
        {isSelected && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 32,
              height: 32,
              backgroundColor: "error.main",
              borderRadius: "50%",
              opacity: 0.3,
              animation: "ping 1s infinite",
            }}
          />
        )}
      </Box>
    </Box>
  );

  const ApartmentPopup = ({ apartment }) => {
    const handleDirections = () => {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(apartment.address)}`;
      window.open(url, "_blank");
    };

    return (
      <Box sx={{ minWidth: 280, maxWidth: 320, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          {apartment.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {apartment.address}
        </Typography>

        <Stack direction="row" spacing={1} mb={2}>
          <Typography variant="caption" color="text.secondary">
            ZIP: {apartment.zip_code}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          size="small"
          startIcon={<Navigation />}
          onClick={handleDirections}
        >
          Directions
        </Button>
      </Box>
    );
  };

  return (
    <Box id="map" sx={{ width: "100%", height: { xs: 600, md: 800 }, mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2, py: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          MyRoomie Map Demo
        </Typography>
      </Box>

      <Box sx={{ height: "100%", position: "relative" }}>
        <Map
          ref={mapRef}
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => setViewport(evt.viewState)}
          onClick={() => setSelectedApartment(null)}
        >
          {userLocation && (
            <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "success.main",
                    color: "white",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    px: 1,
                    py: 0.5,
                    borderRadius: "9999px",
                    mb: 1,
                    boxShadow: 3,
                  }}
                >
                  YOU
                </Box>
                <Box sx={{ position: "relative" }}>
                  <MapPin style={{ width: 32, height: 32, color: "#22c55e" }} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 32,
                      height: 32,
                      backgroundColor: "#22c55e",
                      borderRadius: "50%",
                      opacity: 0.25,
                      animation: "ping 1s infinite",
                    }}
                  />
                </Box>
              </Box>
            </Marker>
          )}

          {apartments.map(
            (apt, idx) =>
              apt.location.lat &&
              apt.location.lng && (
                <Marker
                  key={idx}
                  latitude={apt.location.lat}
                  longitude={apt.location.lng}
                  anchor="bottom"
                >
                  <ApartmentMarker
                    apartment={apt}
                    isSelected={selectedApartment?.place_id === apt.place_id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedApartment(apt);
                    }}
                  />
                </Marker>
              )
          )}

          {selectedApartment && (
            <Popup
              latitude={selectedApartment.location.lat}
              longitude={selectedApartment.location.lng}
              onClose={() => setSelectedApartment(null)}
              anchor="top"
              closeButton
            >
              <ApartmentPopup apartment={selectedApartment} />
            </Popup>
          )}

          {error && (
            <Popup
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              closeOnClick={false}
              anchor="top"
            >
              <Box sx={{ p: 2, backgroundColor: "#fee2e2", borderRadius: 2 }}>
                <Typography variant="subtitle2" color="error.main">
                  Location Error
                </Typography>
                <Typography variant="caption" color="error.main">
                  {error}
                </Typography>
              </Box>
            </Popup>
          )}
        </Map>
      </Box>
    </Box>
  );
}
