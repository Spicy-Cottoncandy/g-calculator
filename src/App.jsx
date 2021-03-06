import "./styles.css";
import React, { useState } from "react";

//components
import { DisplayStatus } from "./components/DisplayStatus";
import { Character, CharacterLevel, Constellation } from "./components/Character";
import { TalentsLevel } from "./components/TalentsLevel";
import { WeaponSlot, WeaponLevel, WeaponRank } from "./components/Weapon";
import { ArtifactSlot, ArtifactText } from "./components/Artifact";

//data
import { characters } from "./data/character/characters";
import { weapons } from "./data/weapon/weapons";

//class
import { CalculationBase, characterLevelRanks, weaponLevelRanks } from "./class/CalculationBase";
import { changeCharacterStatus, changeWeaponStatus, Status, statusPrecisions } from "./class/Status";

//function
import { floorStatus } from "./functions/Util";

export const App = () => {
  const [calculationBase, setCalculationBase] = useState(new CalculationBase());
  const [weaponImageGridDisplay, setWeaponImageGridDisplay] = useState(false);
  const [artifactImageGridDisplay, setArtifactImageGridDisplay] = useState([false, false]);

  /**
   * メニューの表示状態
   */
  const onClickWeaponImage = (event) => {
    setWeaponImageGridDisplay(!weaponImageGridDisplay);
  };

  const onClickArtifactImage = (slot) => {
    if (slot !== 0 && slot !== 1) {
      return;
    }
    changeArtifactImageGridDisplay(slot);
  };

  const changeArtifactImageGridDisplay = (slot) => {
    const newArtifactImageGridDisplay = [...artifactImageGridDisplay];
    newArtifactImageGridDisplay[slot] = !newArtifactImageGridDisplay[slot];
    setArtifactImageGridDisplay(newArtifactImageGridDisplay);
  };

  /**
   * onChangeCharacter
   * キャラクター
   */
  const onChangeCharacter = (event) => {
    const newid = Number(event.target.value);
    const newCharacterStatus = new Status();

    //バリデーションを記述

    //

    changeCharacterStatus(newCharacterStatus, newid, calculationBase.character.levelRank);

    //キャラクター変更によりの武器タイプが変化した場合、idを1にする。
    //同じ武器タイプであれば、変更前のidを維持する。
    let newWeaponId = calculationBase.weapon.id;
    if (
      newid === 0 ||
      calculationBase.character.id === 0 ||
      characters[calculationBase.character.id].weaponType !== characters[newid].weaponType
    ) {
      newWeaponId = 1;
    }

    //武器ステータスを更新する。
    const newWeaponStatus = new Status();
    const weaponType = characters[newid]?.weaponType || null; //オプショナルチェーンでnull設定する。
    const levelRank = calculationBase.weapon.levelRank;
    const refiningRank = calculationBase.weapon.refiningRank;
    changeWeaponStatus(newWeaponStatus, newWeaponId, weaponType, levelRank, refiningRank);

    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        id: newid
      },
      weapon: {
        ...calculationBase.weapon,
        id: newWeaponId
      },
      characterStatus: newCharacterStatus,
      weaponStatus: newWeaponStatus
    });
    //Gridが表示される可能性があるので一律非表示
    setWeaponImageGridDisplay(false);
  };

  /**
   * onChangeCharacterLevel
   * キャラクターレベル
   */
  const onChangeCharacterLevel = (event) => {
    const newLevelRank = Number(event.target.value);
    //バリデーションを記述
    if (newLevelRank < 0 || newLevelRank > 13) {
      return;
    }
    //

    const newLevel = characterLevelRanks[newLevelRank].level;
    const newCharacterStatus = { ...calculationBase.characterStatus };

    changeCharacterStatus(newCharacterStatus, calculationBase.character.id, newLevelRank);

    setCalculationBase({
      ...calculationBase,
      character: {
        ...calculationBase.character,
        levelRank: newLevelRank,
        level: newLevel
      },
      characterStatus: newCharacterStatus
    });
  };

  /**
   * onChangeConstellation
   * 命の星座
   */
  const onChangeConstellation = (event) => {
    let newConstellation = Number(event.target.value);

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

  /**
   * onChangeWeapon
   * 武器
   */
  const onChangeWeapon = (event) => {
    const newWeaponId = Number(event.currentTarget.dataset.itemid);
    //バリデーションを記述
    if (isNaN(newWeaponId)) {
      setWeaponImageGridDisplay(false);
      return;
    }
    //

    //武器ステータスを更新する。
    const newWeaponStatus = new Status();
    const weaponType = characters[calculationBase.character.id]?.weaponType || null;
    const levelRank = calculationBase.weapon.levelRank;
    const refiningRank = calculationBase.weapon.refiningRank;
    changeWeaponStatus(newWeaponStatus, newWeaponId, weaponType, levelRank, refiningRank);

    setCalculationBase({
      ...calculationBase,
      weapon: {
        ...calculationBase.weapon,
        id: newWeaponId
      },
      weaponStatus: newWeaponStatus
    });
    //Gridが表示される可能性があるので一律非表示
    setWeaponImageGridDisplay(false);
  };

  /**
   * onChangeWeponLevel
   * 武器レベル
   */
  const onChangeWeaponLevel = (event) => {
    const newLevelRank = Number(event.target.value);

    //バリデーションを記述
    if (newLevelRank < 0 || newLevelRank > 13) {
      return;
    }
    //

    const newLevel = weaponLevelRanks[newLevelRank].level;

    //武器ステータスを更新する。
    const newWeaponStatus = new Status();
    const weaponId = calculationBase.weapon.id;
    const weaponType = characters[calculationBase.character.id]?.weaponType || null; //オプショナルチェーンでnull設定する。
    const refiningRank = calculationBase.weapon.refiningRank;
    changeWeaponStatus(newWeaponStatus, weaponId, weaponType, newLevelRank, refiningRank);

    setCalculationBase({
      ...calculationBase,
      weapon: {
        ...calculationBase.weapon,
        level: newLevel,
        levelRank: newLevelRank
      },
      weaponStatus: newWeaponStatus
    });
  };

  /**
   * onChangeWeaponRank
   * 武器精錬ランク
   */
  const onCHangeWeaponRank = (event) => {
    const newWeaponRank = Number(event.target.value);

    //バリデーションを記述
    if (newWeaponRank < 0 || newWeaponRank > 5) {
      return;
    }
    //

    //武器ステータスを更新する。
    const newWeaponStatus = new Status();
    const weaponId = calculationBase.weapon.id;
    const weaponType = characters[calculationBase.character.id]?.weaponType || null; //オプショナルチェーンでnull設定する。
    const levelRank = calculationBase.weapon.levelRank;
    changeWeaponStatus(newWeaponStatus, weaponId, weaponType, levelRank, newWeaponRank);

    setCalculationBase({
      ...calculationBase,
      weapon: {
        ...calculationBase.weapon,
        refiningRank: newWeaponRank
      },
      weaponStatus: newWeaponStatus
    });
  };

  /**
   * onChangeArtifactSlot1st
   * 聖遺物スロット1
   */
  const onChangeArtifactSlot1st = (event) => {
    const newArtifactSlot1st = Number(event.currentTarget.dataset.itemid);
    console.log(newArtifactSlot1st, calculationBase.artifacts.setId[1]);

    if (isNaN(newArtifactSlot1st)) {
      //バリデーションを記述
      changeArtifactImageGridDisplay(0);
      return;
    }
    changeArtifactSlot(0, newArtifactSlot1st);
  };

  /**
   * onChangeArtifactSlot1st
   * 聖遺物スロット1
   */
  const onChangeArtifactSlot2nd = (event) => {
    const newArtifactSlot2nd = Number(event.currentTarget.dataset.itemid);
    console.log(calculationBase.artifacts.setId[0], newArtifactSlot2nd);

    if (isNaN(newArtifactSlot2nd)) {
      //バリデーションを記述
      changeArtifactImageGridDisplay(1);
      return;
    }
    changeArtifactSlot(1, newArtifactSlot2nd);
  };

  const changeArtifactSlot = (slot, id) => {
    const newSetId = [...calculationBase.artifacts.setId];
    if (isNaN(id)) {
      //バリデーションを記述
      changeArtifactImageGridDisplay(slot);
      return;
    }
    newSetId[slot] = id;

    setCalculationBase({
      ...calculationBase,
      artifacts: {
        ...calculationBase.artifacts,
        setId: newSetId
      }
    });

    changeArtifactImageGridDisplay(slot);
  };

  /**
   * onChangeTalensLevel
   * 天賦レベル
   */
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
    if (targetProperty === "elementalAttack" && (newLevel < 1 || newLevel > 13)) {
      return;
    }
    if (targetProperty === "elementalBurst" && (newLevel < 1 || newLevel > 13)) {
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

  /**
   * onChangeExtendStatus
   * 手動設定ステータス
   */
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
      ? floorStatus(Number(event.target.value), statusPrecisions[targetProperty])
      : 0;

    setCalculationBase({
      ...calculationBase,
      extendStatus: {
        ...newExtendStatus
      }
    });
  };

  /** 環境変数の設定 */
  //https://github.com/codesandbox/codesandbox-client/issues/630
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <>
      <div className="CharacterHeader">
        <Character onChange={onChangeCharacter} />
      </div>
      <div className="CharacterSettingContainer">
        <div className="CharacterArea">
          <p>{characters[calculationBase.character.id]?.name || ""}</p>
          <div className="CharacterLevel">
            <p>Lv.</p>
            <CharacterLevel onChange={onChangeCharacterLevel} />
          </div>
          <div className="Constellation">
            <p>命の星座</p>
            <Constellation onChange={onChangeConstellation} />
          </div>
        </div>
        <div className="WeaponArea">
          <div className="WeaponSlot">
            <WeaponSlot
              text={
                weapons[characters[calculationBase.character.id]?.weaponType]?.[calculationBase.weapon.id]?.name ||
                "---"
              }
              weaponType={characters[calculationBase.character.id]?.weaponType}
              itemId={calculationBase.weapon.id}
              display={weaponImageGridDisplay}
              onClickImage={onClickWeaponImage}
              onClickGridItem={onChangeWeapon}
            />
          </div>
          <div className="WeaponSetting">
            <div className="WeaponText">
              <p>
                {weapons[characters[calculationBase.character.id]?.weaponType]?.[calculationBase.weapon.id]?.name ||
                  "---"}
              </p>
            </div>
            <div className="WeaponItems">
              <div className="WeaponLevel">
                <p>Lv.</p>
                <WeaponLevel onChange={onChangeWeaponLevel} />
              </div>
              <div className="WeaponRank">
                <p>精錬ランク</p>
                <WeaponRank onChange={onCHangeWeaponRank} />
              </div>
            </div>
          </div>
        </div>
        <div className="ArtifactArea">
          <div className="ArtifactSlot1st">
            <ArtifactSlot
              slot="0"
              itemId={calculationBase.artifacts.setId[0]}
              display={artifactImageGridDisplay[0]}
              onClickImage={() => onClickArtifactImage(0)}
              onClickGridItem={onChangeArtifactSlot1st}
            />
          </div>
          <div className="ArtifactSlot2nd">
            <ArtifactSlot
              slot="1"
              itemId={calculationBase.artifacts.setId[1]}
              display={artifactImageGridDisplay[1]}
              onClickImage={() => onClickArtifactImage(1)}
              onClickGridItem={onChangeArtifactSlot2nd}
            />
          </div>
          <ArtifactText itemId={calculationBase.artifacts.setId[0]} />
          <ArtifactText itemId={calculationBase.artifacts.setId[1]} />
        </div>

        <div className="TalentsLevelArea">
          <TalentsLevel talentsLevel={calculationBase.talentsLevel} onChange={onChangeTalensLevel} />
        </div>
      </div>

      <div className="StatusContainer">
        {typeof characters[calculationBase.character.id] !== "undefined" ? (
          <>
            <DisplayStatus calculationBase={calculationBase} onchangeExtendStatus={onChangeExtendStatus} />
          </>
        ) : (
          <p>データ無し</p>
        )}
      </div>
    </>
  );
};
