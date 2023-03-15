import React from "react";
import {
    Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap projectionConfig={{
        scale:350,
        center:[72,19],
    }} className='w-full h-full'>
      <Graticule stroke="" />
      <Geographies geography="/features.json" fill="#D1D5DB" strokeWidth={1} zoomAndPan="9">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation subject={[ 72.85, 19.17]}
        dx={-25}
        dy={50}
        connectorProps={{
            stroke:"#da4ea2",
            strokeWidth:4,
            strokeLinecap:"round"

        }}
        >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#da4ea2">{"Me"}</text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
