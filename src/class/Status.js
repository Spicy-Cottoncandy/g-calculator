import { characters } from "../data/character/characters";
import { weapons } from "../data/weapon/weapons";

export class Status {
  constructor() {
    this.baseHp = 0;
    this.bonusHp = 0;
    this.hpPercent = 0.0;
    this.baseAtk = 0;
    this.bonusAtk = 0;
    this.atkPercent = 0.0;
    this.baseDef = 0;
    this.bonusDef = 0;
    this.defPercent = 0.0;
    this.elementalMastery = 0;
    this.criticalRate = 0.0;
    this.criticalDamage = 0;
    this.healingBonus = 0.0; //与える治癒効果
    this.incomingHealingBonus = 0; //受ける治癒効果
    this.energyRecharge = 0.0;
    this.shieldStrength = 0.0;
    this.damageBonus = {
      Anemo: 0, //風
      Cryo: 0, //氷
      Dendro: 0, //草
      Electro: 0, //雷
      Geo: 0, //岩
      Hydro: 0, //水
      Pyro: 0, //炎
      Physical: 0 //物理
    };
  }
}

export const changeCharacterStatus = (status, id, levelRank) => {
  if (typeof characters[id] === "undefined") {
    status.baseHp = status.baseAtk = status.baseDef = status.criticalRate = status.criticalDamage = 0;
    return;
  }

  status.baseHp = characters[id].HP[levelRank];
  status.baseAtk = characters[id].ATK[levelRank];
  status.baseDef = characters[id].DEF[levelRank];
  status.criticalRate = 5.0;
  status.criticalDamage = 50.0;

  //キャラクターの特別ステータスを設定する。
  const propertys = characters[id].specialStatusType.split(".");
  const targetProperty = propertys.pop();
  const specialStatus = characters[id].specialStatus;
  let targetObject = status;

  //オジェクトがネストしている場合は目標のプロパティまで探索する。
  propertys.forEach((property) => {
    targetObject = targetObject[property];
  });
  targetObject[targetProperty] += specialStatus[levelRank];
};

export const changeWeaponStatus = (status, id, weaponType, levelRank, refiningRank) => {
  if (weaponType === null) {
    return;
  }
  if (typeof weapons[weaponType][id] === "undefined") {
    return;
  }

  const baseATK = weapons[weaponType][id].baseATK[levelRank];
  const secondStatusType = weapons[weaponType][id].secondStatusType;
  const secondStatus = weapons[weaponType][id].secondStatus[levelRank];

  status.baseAtk = baseATK;
  if (secondStatusType !== null) {
    const propertys = secondStatusType.split(".");
    const targetProperty = propertys.pop();
    let targetObject = status;

    //オジェクトがネストしている場合は目標のプロパティまで探索する。
    propertys.forEach((property) => {
      targetObject = targetObject[property];
    });

    targetObject[targetProperty] = secondStatus;
  }
};

export const statusPrecisions = {
  baseHp: 0,
  bonusHp: 0,
  hpPercent: 1,
  baseAtk: 0,
  bonusAtk: 0,
  atkPercent: 1,
  baseDef: 0,
  bonusDef: 0,
  defPercent: 1,
  elementalMastery: 0,
  criticalRate: 1,
  criticalDamage: 1,
  healingBonus: 1, //与える治癒効果
  incomingHealingBonus: 1, //受ける治癒効果
  energyRecharge: 1,
  shieldStrength: 1,
  Anemo: 1, //風
  Cryo: 1, //氷
  Dendro: 1, //草
  Electro: 1, //雷
  Geo: 1, //岩
  Hydro: 1, //水
  Pyro: 1, //炎
  Physical: 1 //物理
};

/*
this.status = {
  hp: 0,
  hpPercent: 0.0,
  atk: 0,
  atkPercent: 0.0,
  def: 0,
  defPercent: 0.0,
  elementalMastery: 0,
  criticalRate: 0.0,
  criticalDamage: 0,
  healingBonus: 0.0, //与える治癒効果
  incomingHealingBonus: 0, //受ける治癒効果
  energyRecharge: 0.0,
  shieldStrength: 0.0,
  damageBonus: {
    Anemo: 0, //風
    Cryo: 0, //氷
    Dendro: 0, //草
    Electro: 0, //雷
    Geo: 0, //岩
    Hydro: 0, //水
    Pyro: 0, //炎
    Physical: 0 //物理
  }
};
*/
