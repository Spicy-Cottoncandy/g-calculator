import React, { useEffect, useState } from "react";
import { SelectMenu } from "./Common";
import { characters } from "../data/character/characters";

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

const constellations = [
  { value: 0, text: "0重" },
  { value: 1, text: "1重" },
  { value: 2, text: "2重" },
  { value: 3, text: "3重" },
  { value: 4, text: "4重" },
  { value: 5, text: "5重" },
  { value: 6, text: "6重" }
];

export const Character = (props) => {
  const { onChange } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const array = [];
    Object.keys(characters).forEach((key) => {
      array.push({ value: key, text: characters[key].name });
    });
    setItems(array);
  }, []);

  return (
    <>
      <SelectMenu items={items} isRequired={false} onChange={onChange} />
    </>
  );
};

export const Level = (props) => {
  const { onChange } = props;

  return (
    <>
      <SelectMenu items={levels} isRequired={true} onChange={onChange} />
    </>
  );
};

export const Constellation = (props) => {
  const { onChange } = props;

  return (
    <>
      <SelectMenu items={constellations} isRequired={true} onChange={onChange} />
    </>
  );
};
