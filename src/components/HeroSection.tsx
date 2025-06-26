"use client";
import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Map from "../map/map";
import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface HeroSectionProps {
  city?: {
    name: string;
    state: string;
  };
}

export default function HeroSection({ city }: HeroSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cityText = city ? ` in ${city.name}` : "";

  
  const stateAbbreviation = city?.state ?? "IL"; // fallback to IL if not provided



  const headline = (
    <>
      Find your <span className="gradient-text">vibe</span>
      {cityText}.<br />
      Find your <span className="gradient-text">space</span>
      {cityText}.<br />
      Find <span className="gradient-text">MyRoomie</span>.
    </>
  );

  const subtext = city
    ? `Looking for roommates${cityText}? The first roommate finder that's safe, real, and tailored for your area.`
    : "The first roommate finder that's safe, real, and actually works. Join thousands who've ditched fake profiles and broken filters for genuine connections.";

  return (
    <Box
      component="section"
      id="home"
      sx={{
        width: "100%",
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left content */}
        <Box flex={1} maxWidth={{ md: "50%" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", lineHeight: 1.3 }}
            className="hero-heading"
          >
            {headline}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 4, color: "text.secondary" }}
            className="hero-subtext"
          >
            {subtext}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowRight />}
                sx={{ fontWeight: 600, px: 3, py: 1.5 }}
              >
                Become a beta tester
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#howitworks"
            >
              <Button
                variant="outlined"
                color="primary"
                endIcon={<MapPin />}
                sx={{ fontWeight: 600, px: 3, py: 1.5 }}
              >
                See How It Works
              </Button>
            </motion.a>
          </Stack>
        </Box>

        {/* Right map section */}
        <Box
          flex={1}
          width="100%"
          height={{ xs: 400, sm: 500, md: 500, lg: 600 }}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            mt: { xs: 4, md: 0 },
          }}
        >
          <Map key={stateAbbreviation} useCurrentLocation={true}/>
        </Box>
      </Stack>
    </Box>
  );
}
