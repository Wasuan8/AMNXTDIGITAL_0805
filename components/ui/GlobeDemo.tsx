"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 1.5,
    globeColor: "#020607ff", // Brighter Azure Blue Ocean
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.15,
    emissive: "#0ea5e9",
    emissiveIntensity: 0.15,
    shininess: 0.8,
    polygonColor: "#22c55e", // Bright Emerald Green Land
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2500,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 20, lng: 80 },
    autoRotate: true,
    autoRotateSpeed: 1.2,
  };
  const colors = ["#ffffff", "#fbbf24", "#ffffff", "#fbbf24", "#ffffff", "#fbbf24"];
  const sampleArcs = [
    { order: 1, startLat: 22.3193, startLng: 114.1694, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.3, color: colors[0] },
    { order: 2, startLat: 22.3193, startLng: 114.1694, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: 22.3193, startLng: 114.1694, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[3] },
    { order: 5, startLat: 22.3193, startLng: 114.1694, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.3, color: colors[4] },
    { order: 6, startLat: 19.076, startLng: 72.8777, endLat: 40.7128, endLng: -74.006, arcAlt: 0.4, color: colors[5] }, // Mumbai to NYC
    { order: 7, startLat: 28.6139, startLng: 77.209, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: colors[0] }, // Delhi to London
    { order: 8, startLat: 28.6139, startLng: 77.209, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2, color: colors[1] }, // Delhi to Dubai
    { order: 9, startLat: 28.6139, startLng: 77.209, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[2] }, // Delhi to Singapore
    { order: 10, startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: colors[3] }, // NYC to London
    { order: 11, startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: colors[4] }, // SF to Tokyo
    { order: 12, startLat: 51.5074, startLng: -0.1278, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.1, color: colors[5] }, // London to Paris
    { order: 13, startLat: 25.2048, startLng: 55.2708, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.4, color: colors[0] }, // Dubai to Sydney
    { order: 14, startLat: 34.0522, startLng: -118.2437, endLat: 37.5665, endLng: 126.978, arcAlt: 0.3, color: colors[1] }, // LA to Seoul
    { order: 15, startLat: -23.5505, startLng: -46.6333, endLat: 40.4168, endLng: -3.7038, arcAlt: 0.4, color: colors[2] }, // Sao Paulo to Madrid
    { order: 16, startLat: 30.0444, startLng: 31.2357, endLat: 55.7558, endLng: 37.6173, arcAlt: 0.3, color: colors[3] }, // Cairo to Moscow
  ];

  return (
    <div className="flex flex-row items-center justify-center bg-white relative w-full h-full">
      <div className="w-full relative overflow-hidden h-full">
        <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent w-full z-20" />
        <div className="w-full h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
