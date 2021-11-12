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
import { changeCharacterStatus, statusPrecisions } from "./class/Status";

//function
import { floorStatus } from "./functions/Util";

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
    const newExtendStatus = { ...calculationBase.extendStatus };
    let targetObject = newExtendStatus;
    const propertys = event.target.dataset.item.split(".");
    const targetProperty = propertys.pop();

    //HTMLのカスタムデータ属性で更新するプロパティを指定する。
    //オジェクトがネストしている場合は目標のプロパティまで探索する。
    propertys.forEach((property) => {
      targetObject = targetObject[property];
    });

    //ステータスごとの単位にinputの小数点を切り捨て。画面もこの値で再描画する。
    targetObject[targetProperty] = !isNaN(event.target.value)
      ? floorStatus(
          Number(event.target.value),
          statusPrecisions[targetProperty]
        )
      : 0;

    setCalculationBase({
      ...calculationBase,
      extendStatus: {
        ...newExtendStatus
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
