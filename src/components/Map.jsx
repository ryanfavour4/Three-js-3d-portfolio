import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-3.0, -50, -9],
        center: [-5, -40],
        scale: 1600
      }}
      style={{width:"100%", height:"100%" , marginBottom: 0,}}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065d00"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[3.3792, 6.5244]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Lagos"}
        </text>
      </Annotation>
      <Annotation
        subject={[21.01178, 52.22977]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
