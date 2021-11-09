import "./styles.css";
import React, { useEffect, useState } from "react";

//components
import { BaseStatus } from "./components/Status";
import { Character } from "./components/Character";
import { Level } from "./components/Level";

//data
import { characters } from "./data/character/characters";

//class
import { CalculationBase } from "./class/CalculationBase";
import { changeCharacterStatus } from "./class/Status";

export const App = () => {
  const [calculationBase, setCalculationBase] = useState(new CalculationBase());
  const onChangeCharacter = (event) => {
    const newid = Number(event.target.value);
    const newBaseStatus = { ...calculationBase.baseStatus };

    changeCharacterStatus(
      newBaseStatus,
      newid,
      calculationBase.character.levelRank
    );

    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        id: newid
      },
      baseStatus: newBaseStatus
    });
  };

  const onChangeLevel = (event) => {
    const newLevel = Number(event.target.value.substr(-6, 2));
    const newLevelRank = event.target.value;
    const newBaseStatus = { ...calculationBase.baseStatus };

    changeCharacterStatus(
      newBaseStatus,
      calculationBase.character.id,
      newLevelRank
    );

    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        levelRank: newLevelRank,
        level: newLevel
      },
      baseStatus: newBaseStatus
    });
  };

  const onChangeExtendStatus = (event) => {
    setCalculationBase({
      ...calculationBase,
      extendStatus: {
        ...calculationBase.extendStatus,
        [event.target.dataset.item]: event.target.value
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
        {typeof characters[calculationBase.character.id] !== "undefined" ? (
          <>
            <BaseStatus
              level={calculationBase.character.levelRank}
              calculationBase={calculationBase}
              onchangeExtendStatus={onChangeExtendStatus}
            />
          </>
        ) : (
          <p>データ無し</p>
        )}
      </div>
    </>
  );
};
