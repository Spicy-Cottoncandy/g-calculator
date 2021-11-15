import React, { useEffect, useState } from "react";
import weapons from "../data/weapon/weapons";

const levels = [
  { text: "1/20", value: 0 },
  { text: "20/20", value: 1 },
  { text: "20/40", value: 2 },
  { text: "40/40", value: 3 },
  { text: "40/50", value: 4 },
  { text: "50/50", value: 5 },
  { text: "50/60", value: 6 },
  { text: "60/60", value: 7 },
  { text: "60/70", value: 8 },
  { text: "70/70", value: 9 },
  { text: "70/80", value: 10 },
  { text: "80/80", value: 11 },
  { text: "80/90", value: 12 },
  { text: "90/90", value: 13 }
];

export const Weapon = (props) => {
  const { weaponType, onChange } = props;

  const [weaponItems, setWeaponItems] = useState([]);

  useEffect(() => {}, []);

  return <></>;
};
