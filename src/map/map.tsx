"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";
import fetchApartments from "../database/fetchApartments";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ApartmentMarker, ApartmentPopup } from "./apartmentComponents";
import cityList from "../components/_data/cities.json";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
let apartmentsCache = {};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getRadiusFromZoom(zoom) {
  const baseRadius = 50;
  const zoomFactor = Math.pow(2, 10 - zoom);
  return Math.max(1, baseRadius * zoomFactor);
}

// Helper function to truncate apartment names
function truncateName(name, maxLength = 15) {
  if (!name) return '';
  if (name.length <= maxLength) return name;
  return name.substring(0, maxLength) + '...';
}

// Helper function to determine if names should be shown based on zoom level
function shouldShowNames(zoom) {
  return zoom >= 14; // Only show names when zoomed in enough
}

// Helper function to select which apartments should show names (e.g., top-rated or featured)
function selectApartmentsForNames(apartments, maxNames = 10) {
  // You can customize this logic based on your data structure
  // For example, prioritize by rating, price, or featured status
  return apartments
    .filter(apt => apt.featured || apt.rating >= 4.0) // Example criteria
    .slice(0, maxNames);
}

export default function MapComponent({ stateKey, citySlug, useCurrentLocation }) {
  const mapRef = useRef<MapRef | null>(null);
  const [allApartments, setAllApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showAllNames, setShowAllNames] = useState(false); // Toggle for showing all names
  
  const targetCity = useMemo(() => cityList.find((c) => c.slug === stateKey), [stateKey]);
  
  // Initialize viewport based on target city or default
  const [viewport, setViewport] = useState(() => {
    if (!useCurrentLocation) {
      return {
        latitude: citySlug.lat,
        longitude: citySlug.lng,
        zoom: 13,
      };
    }
    return {
      latitude: 42.0053,
      longitude: -87.6872,
      zoom: 13,
    };
  });

  // Handle city navigation when stateKey changes
  useEffect(() => {
    if (useCurrentLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            const newViewport = { latitude, longitude, zoom: 13 };
            setViewport(newViewport);
            
            if (isMapLoaded && mapRef.current) {
              mapRef.current.flyTo({
                center: [longitude, latitude],
                zoom: 13,
                speed: 1.6,
                curve: 1,
                easing: (t) => t,
              });
            }
          },
          () => setError("Location permission denied or unavailable.")
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    } else if (targetCity) {
      const { lat: latitude, lng: longitude } = targetCity;
      const newViewport = { latitude, longitude, zoom: 13 };
      setViewport(newViewport);
      
      if (isMapLoaded && mapRef.current) {
        mapRef.current.flyTo({
          center: [longitude, latitude],
          zoom: 13,
          speed: 1.6,
          curve: 1,
          easing: (t) => t,
        });
      }
    }
  }, [useCurrentLocation, targetCity, isMapLoaded]);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  // Load apartments data
  useEffect(() => {
    const cacheKey = stateKey;
    console.log(cacheKey, " the key");
    if (apartmentsCache[cacheKey]) {
      setAllApartments(apartmentsCache[cacheKey]);
      return;
    }
    fetchApartments(stateKey)
      .then((data) => {
        apartmentsCache[cacheKey] = data;
        setAllApartments(data);
      })
      .catch((err) => {
        console.error("Error loading apartments:", err);
        setError("Failed to load apartments data");
      });
  }, [stateKey]);

  const visibleApartments = useMemo(() => {
    if (!allApartments.length) return [];
    const { latitude, longitude, zoom } = viewport;
    const radius = getRadiusFromZoom(zoom);

    return allApartments.filter((apt) => {
      if (!apt.location?.lat || !apt.location?.lng) return false;
      return calculateDistance(latitude, longitude, apt.location.lat, apt.location.lng) <= radius;
    });
  }, [allApartments, viewport]);

  // Determine which apartments should show names
  const apartmentsWithNames = useMemo(() => {
    const showNames = shouldShowNames(viewport.zoom);
    if (!showNames && !showAllNames) return [];
    
    if (showAllNames) {
      return visibleApartments;
    }
    
    // Show names for selected apartments based on criteria
    return selectApartmentsForNames(visibleApartments);
  }, [visibleApartments, viewport.zoom, showAllNames]);

  const clearCache = () => {
    apartmentsCache = {};
  };

  return (
    <Box id="map" sx={{ width: "100%", height: { xs: 600, md: 800 }, mt: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2, py: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2" color="text.secondary">
            MyRoomie Map Demo - Showing {visibleApartments.length} of {allApartments.length} apartments
            {targetCity && ` in ${targetCity.name || stateKey}`}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button 
              size="small" 
              variant={showAllNames ? "contained" : "outlined"} 
              onClick={() => setShowAllNames(!showAllNames)}
              sx={{ fontSize: "0.75rem", py: 0.25 }}
            >
              {showAllNames ? "Hide Names" : "Show All Names"}
            </Button>
            <Button 
              size="small" 
              variant="outlined" 
              onClick={clearCache} 
              sx={{ fontSize: "0.75rem", py: 0.25 }}
            >
              Clear Cache
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ height: "100%", position: "relative" }}>
        <Map
          ref={mapRef}
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          style={{ width: "100%", height: "100%" }}
          onLoad={handleMapLoad}
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

          {visibleApartments.map((apt, idx) => {
            const shouldShowName = apartmentsWithNames.some(namedApt => 
              namedApt.place_id === apt.place_id
            );
            
            return (
              <Marker
                key={`${apt.place_id || idx}`}
                latitude={apt.location.lat}
                longitude={apt.location.lng}
                anchor="bottom"
              >
                <ApartmentMarker
                  apartment={apt}
                  isSelected={selectedApartment?.place_id === apt.place_id}
                  showName={shouldShowName}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedApartment(apt);
                  }}
                />
              </Marker>
            );
          })}

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