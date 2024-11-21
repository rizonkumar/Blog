import React from "react";

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#bgGradient)" />

      {/* Stylized "B" */}
      <path
        d="M14 10h8c3.314 0 6 2.686 6 6 0 1.657-1.343 3-3 3 2.761 0 5 2.239 5 5 0 3.314-2.686 6-6 6h-10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pen/quill detail */}
      <path
        d="M12 10v20M12 20h11"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pen tip */}
      <path
        d="M8 34l4-4 4 4"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="bgGradient" x1="4" y1="4" x2="36" y2="36">
          <stop offset="0%" stopColor="#2563EB" /> {/* blue-600 */}
          <stop offset="100%" stopColor="#1D4ED8" /> {/* blue-700 */}
        </linearGradient>

        <linearGradient id="accentGradient" x1="8" y1="30" x2="16" y2="38">
          <stop offset="0%" stopColor="#93C5FD" /> {/* blue-300 */}
          <stop offset="100%" stopColor="#60A5FA" /> {/* blue-400 */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
