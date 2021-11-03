import "./styles.css";
import React, { useState } from "react";
//
import { CharacterLevels, CharacterBase } from "./data/items";
//
import { SelectMenu, InputNumber } from "./Parts";
import { BaseStatus } from "./components/Status";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState("---");

  const onChangeSelectMenu = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <>
      <SelectMenu items={CharacterLevels} onChange={onChangeSelectMenu} />

      <div className="BaseStatus">
        {typeof CharacterBase.HP[selectedItem] !== "undefined" &&
        typeof CharacterBase.ATK[selectedItem] !== "undefined" &&
        typeof CharacterBase.DEF[selectedItem] !== "undefined" ? (
          <BaseStatus level={selectedItem} />
        ) : (
          <p>データ無し</p>
        )}
      </div>
    </>
  );
};
