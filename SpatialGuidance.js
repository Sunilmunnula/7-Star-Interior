
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Heading from 'react-native-heading';

export default function SpatialGuidance() {
  const [heading, setHeading] = useState(0);
  const [zone, setZone] = useState("North");

  const directionMap = (deg) => {
    if (deg >= 45 && deg < 135) return "East";
    if (deg >= 135 && deg < 225) return "South";
    if (deg >= 225 && deg < 315) return "West";
    return "North";
  };

  const getGuidance = (dir) => {
    const guidance = {
      North: "Living spaces and calm zones.",
      East: "Workspaces and creativity.",
      South: "Storage and heavy items.",
      West: "Rest and children’s rooms.",
    };
    return guidance[dir] || "General layout guidance.";
  };

  useEffect(() => {
    Heading.start(1).then((started) => {
      if (started) {
        Heading.on((data) => {
          setHeading(data.heading);
          const dir = directionMap(data.heading);
          setZone(dir);
        });
      }
    });
    return () => Heading.stop();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Current Direction: {zone}</Text>
      <Text style={{ marginTop: 10 }}>Design Guidance: {getGuidance(zone)}</Text>
    </View>
  );
}
