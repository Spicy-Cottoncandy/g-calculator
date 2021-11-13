import "./styles.css";
import React, { useEffect, useState } from "react";

//components
import { BaseStatus } from "./components/Status";
import { Character, Level, Constellation } from "./components/Character";
import { TalentsLevel } from "./components/TalentsLevel";
import { Weapon } from "./components/Weapon";

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

    //バリデーションを記述

    //

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

    //バリデーションを記述

    //

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

  const onChangeConstellation = (event) => {
    let newConstellation = event.target.value;

    //バリデーションを記述
    if (newConstellation < 0 || newConstellation > 6) {
      return;
    }
    //

    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        constellation: newConstellation
      }
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

  const onChangeTalensLevel = (event) => {
    const newTalentsLevel = { ...calculationBase.talentsLevel };
    const newLevel = Number(event.target.value);
    const targetProperty = event.target.dataset.item;

    //バリデーションを記述
    if (!Object.keys(calculationBase.talentsLevel).includes(targetProperty)) {
      return;
    }

    if (targetProperty === "normalAttack" && (newLevel < 1 || newLevel > 11)) {
      return;
    }
    if (
      targetProperty === "elementalAttack" &&
      (newLevel < 1 || newLevel > 13)
    ) {
      return;
    }
    if (
      targetProperty === "elementalBurst" &&
      (newLevel < 1 || newLevel > 13)
    ) {
      return;
    }
    //

    newTalentsLevel[targetProperty] = newLevel;
    setCalculationBase({
      ...calculationBase,
      talentsLevel: {
        ...newTalentsLevel
      }
    });
  };

  return (
    <>
      <div className="CharacterArea">
        <Character onChange={onChangeCharacter} />
        <Level onChange={onChangeLevel} />
        <Constellation onChange={onChangeConstellation} />
        <Weapon />
        <TalentsLevel
          talentsLevel={calculationBase.talentsLevel}
          onChange={onChangeTalensLevel}
        />
      </div>
      <div className="StatusArea">
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
