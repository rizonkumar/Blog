import React from "react";

const Logo = ({ colorTheme = "blue" }) => {
  // Define color themes
  const colorThemes = {
    blue: {
      bgStart: "#2563EB",
      bgEnd: "#1D4ED8",
      accentStart: "#93C5FD",
      accentEnd: "#60A5FA",
    },
    green: {
      bgStart: "#22C55E", // Green-600
      bgEnd: "#16A34A", // Green-700
      accentStart: "#A7F3D0", // Green-300
      accentEnd: "#6EE7B7", // Green-400
    },
    orange: {
      bgStart: "#F97316",
      bgEnd: "#EA580C",
      accentStart: "#FCD34D",
      accentEnd: "#FBBF24",
    },
    purple: {
      bgStart: "#8B5CF6", // Purple-600
      bgEnd: "#7C3AED", // Purple-700
      accentStart: "#D8B4FE", // Purple-300
      accentEnd: "#C084FC", // Purple-400,
    },
    red: {
      bgStart: "#EF4444", // Red-600
      bgEnd: "#DC2626", // Red-700
      accentStart: "#FECACA", // Red-300
      accentEnd: "#FCA5A5", // Red-400
    },
  };

  const colors = colorThemes[colorTheme] || colorThemes.blue; // Default to blue

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="8"
        fill={`url(#bgGradient)`}
      />

      {/* Simplified "B" */}
      <path
        d="M12 12V28H20C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12H12ZM20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24Z"
        fill="white"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="bgGradient" x1="4" y1="4" x2="36" y2="36">
          <stop offset="0%" stopColor={colors.bgStart} />
          <stop offset="100%" stopColor={colors.bgEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
