import React from "react";
import { SelectMenu } from "./Common";
import { characters } from "../data/character/characters";

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
