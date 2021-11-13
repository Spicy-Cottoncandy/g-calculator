import React from "react";
import { SelectMenu } from "./Common";
import { characters } from "../data/character/characters";

const levels = [
  { text: "1/20", value: "001/020", level: 1 },
  { text: "20/20", value: "020/020", level: 20 },
  { text: "20/40", value: "020/040", level: 20 },
  { text: "40/40", value: "040/040", level: 40 },
  { text: "40/50", value: "040/050", level: 40 },
  { text: "50/50", value: "050/050", level: 50 },
  { text: "50/60", value: "050/060", level: 50 },
  { text: "60/60", value: "060/060", level: 60 },
  { text: "60/70", value: "060/070", level: 60 },
  { text: "70/70", value: "070/070", level: 70 },
  { text: "70/80", value: "070/080", level: 70 },
  { text: "80/80", value: "080/080", level: 80 },
  { text: "80/90", value: "080/090", level: 80 },
  { text: "90/90", value: "090/090", level: 90 }
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
  const items = [];
  Object.keys(characters).forEach((key) => {
    items.push({ value: key, text: characters[key].name });
  });

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
      <SelectMenu
        items={constellations}
        isRequired={true}
        onChange={onChange}
      />
    </>
  );
};
