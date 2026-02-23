// src/components/Map.jsx
import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";

// Boston (lon, lat)
const BOSTON = [-71.0589, 42.3601];

/**
 * Zoomed map centered on Boston with US state borders.
 * - Uses your /features.json as the base (world).
 * - Overlays US states from us-atlas (TopoJSON).
 * - Theme-aware colors via CSS vars.
 */
const Map = ({
  label = "Boston",
  center = BOSTON,
  scale = 3800, // <-- magnified
}) => {
  return (
    <div
      className={[
        "relative w-full h-[320px] sm:h-[380px]",
        // Base land + coast colors
        "[--geo-fill:#cbd5e1] [--geo-stroke:#94a3b8]",
        // State border color
        "[--state-stroke:#64748b]",
        // Dark theme tokens
        "dark:[--geo-fill:#475569] dark:[--geo-stroke:#1f2937] dark:[--state-stroke:#94a3b8]",
      ].join(" ")}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center, scale }}
        className="w-full h-full text-slate-300 dark:text-slate-600"
      >
        {/* Graticule */}
        <Graticule stroke="currentColor" strokeWidth={1} />

        {/* World base geometry */}
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--geo-fill)"
                stroke="var(--geo-stroke)"
                strokeWidth={0.6}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", filter: "brightness(1.04)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* U.S. state borders overlay (TopoJSON from us-atlas) */}
        <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="transparent"
                stroke="var(--state-stroke)"
                strokeWidth={1}
                style={{ default: { outline: "none" } }}
              />
            ))
          }
        </Geographies>

        {/* Boston marker/label */}
        <Annotation
          subject={BOSTON}
          dx={-70}
          dy={-100}
          connectorProps={{
            stroke: "#25b15d",
            strokeWidth: 3,
            strokeLinecap: "round",
          }}
        >
          <text
            x="-8"
            y="4"
            className="font-semibold"
            fontSize={50}
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#25b15d"
          >
            {label}
          </text>
        </Annotation>
      </ComposableMap>
    </div>
  );
};

export default Map;
