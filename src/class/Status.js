import { characters } from "../data/character/characters";

export class Status {
  constructor() {
    this.hp = 0;
    this.hpPercent = 0.0;
    this.atk = 0;
    this.atkPercent = 0.0;
    this.def = 0;
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
    status.hp = status.atk = status.def = 0;
    return;
  }
  status.hp = characters[id].HP[levelRank];
  status.atk = characters[id].ATK[levelRank];
  status.def = characters[id].DEF[levelRank];
};

export const statusPrecisions = {
  hp: 0,
  hpPercent: 1,
  atk: 0,
  atkPercent: 1,
  def: 0,
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
