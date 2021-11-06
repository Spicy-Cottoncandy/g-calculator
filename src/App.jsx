import "./styles.css";
import React, { useState } from "react";
//
import { CharacterLevels, CharacterBase } from "./data/items";
//
import { BaseStatus } from "./components/Status";
import { CalculationBase } from "./class/CalculationBase";
import { Character } from "./components/Character";
import { Level } from "./components/Level";

export const App = () => {
  const [calculationBase, setCalculationBase] = useState(new CalculationBase());
  const onChangeCharacter = (event) => {
    setCalculationBase({
      ...calculationBase,
      character: { ...calculationBase.character, id: event.target.value }
    });
  };

  const onChangeLevel = (event) => {
    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        levelRank: event.target.value,
        level: Number(event.target.value.substr(-6, 2))
      }
    });
  };

  return (
    <>
      <div className="CharacterArea">
        <Character onChange={onChangeCharacter} />
        <Level onChange={onChangeLevel} />
      </div>
      <div className="BaseStatusArea">
        {typeof CharacterBase.HP[calculationBase.character.levelRank] !==
          "undefined" &&
        typeof CharacterBase.ATK[calculationBase.character.levelRank] !==
          "undefined" &&
        typeof CharacterBase.DEF[calculationBase.character.levelRank] !==
          "undefined" ? (
          <BaseStatus level={calculationBase.character.levelRank} />
        ) : (
          <p>データ無し</p>
        )}
      </div>
    </>
  );
};
