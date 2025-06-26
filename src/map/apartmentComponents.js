"use client";
import React from "react";
import { MapPin, Navigation, Users, Home } from "lucide-react";
import { Box, Typography, Button, Stack, Paper, Chip,Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

// Keyframe animations
const pulseAnimation = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 0.4; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  }

  @keyframes slideIn {
    0% { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

export const ApartmentMarker = ({ apartment, isSelected, onClick }) => (
  <>
    <style>{pulseAnimation}</style>
    <Tooltip
      title={apartment.name}
      arrow
      placement="top"
      PopperProps={{ modifiers: [{ name: "offset", options: { offset: [0, 8] } }] }}
    >
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: isSelected ? "scale(1.15)" : "scale(1)",
        transition: "all 0.3s ease",
        animation: isSelected ? "float 2s ease-in-out infinite" : "none",
        "&:hover": {
          transform: "scale(1.08)",
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
        },
        zIndex: isSelected ? 1000 : 1,
      }}
    >
      {/* Marker Icon */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSelected && (
          <>
            <Box
              sx={{
                position: "absolute",
                width: 60,
                height: 60,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,87,34,0.3) 0%, transparent 70%)",
                animation: "pulse 2s infinite",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "rgba(255,87,34,0.2)",
                animation: "pulse 1.5s infinite 0.5s",
              }}
            />
          </>
        )}
        <Box
          sx={{
            position: "relative",
            color: isSelected ? "#D84315" : "#FF5722",
            filter: isSelected
              ? "drop-shadow(0 4px 8px rgba(255,87,34,0.5))"
              : "drop-shadow(0 2px 4px rgba(255,87,34,0.3))",
            transition: "all 0.3s ease",
          }}
        >
          <MapPin
            size={36}
            strokeWidth={2.5}
            stroke={isSelected ? "#FFFFFF" : "#FFFFFF"}
            fill={isSelected ? "#FF5722" : "#FF7043"} // bright orange-red for better visibility
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: 0.9,
          }}
        />
      </Box>
    </Box>
    </Tooltip>
  </>
);

export const ApartmentPopup = ({ apartment }) => {
  const router = useRouter();

  const handleNavigateToApp = () => {
    router.push("/downloadApp");
  };

  return (
    <>
      <style>{pulseAnimation}</style>
      <Box
        sx={{
          minWidth: 320,
          maxWidth: 380,
          background: "linear-gradient(135deg, #1c1f2a, #2a2f45)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          animation: "slideIn 0.4s ease-out",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            p: 3,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Home size={20} color="white" />
            <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
              {apartment.name}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Navigation size={16} color="rgba(255,255,255,0.8)" />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
              {apartment.address}
            </Typography>
          </Box>

          <Chip
            label={`ZIP: ${apartment.zip_code}`}
            size="small"
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              fontWeight: 600,
              backdropFilter: "blur(5px)",
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Box sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleNavigateToApp}
              sx={{
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #2c5364 0%, #203a43 100%)",
                color: "white",
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #203a43 0%, #2c5364 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
                },
              }}
            >
              Apply Now
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={handleNavigateToApp}
              startIcon={<Users size={18} />}
              sx={{
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#000", // black text
                borderColor: "#000", // black border
                borderRadius: "12px",
                textTransform: "none",
                backgroundColor: "#fff", // white background
                "&:hover": {
                  backgroundColor: "#f0f0f0", // slight gray on hover
                  borderColor: "#000",
                  color: "#000",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get a Roommate
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};