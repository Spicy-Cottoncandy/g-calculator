//import { characters } from "../data/character/characters";
import { Status } from "./Status";

export class CalculationBase {
  constructor() {
    this.character = {
      id: 0,
      level: 1,
      levelRank: 0,
      constellation: 0
    };
    this.talentsLevel = {
      normalAttack: 6,
      elementalAttack: 6,
      elementalBurst: 6
    };
    this.weapon = {
      id: 0,
      level: 0,
      levelRank: "001/020",
      rank: 0
    };
    this.artifacts = {
      setId: [0, 0],
      flower: {
        star: 0,
        level: 0,
        mainStat: ""
      },
      plume: {
        star: 0,
        level: 0,
        mainStat: ""
      },
      sand: {
        star: 0,
        level: 0,
        mainStat: ""
      },
      goblet: {
        star: 0,
        level: 0,
        mainStat: ""
      },
      circlet: {
        star: 0,
        level: 0,
        mainStat: ""
      }
    };
    this.characterStatus = new Status();
    this.weaponStatus = new Status();
    this.extendStatus = new Status();
  }
}

export const levelRanks = {
  0: { level: 1, rank: "1/20" },
  1: { level: 20, rank: "20/20" },
  2: { level: 20, rank: "20/40" },
  3: { level: 40, rank: "40/40" },
  4: { level: 40, rank: "40/50" },
  5: { level: 50, rank: "50/50" },
  6: { level: 50, rank: "50/60" },
  7: { level: 60, rank: "60/70" },
  8: { level: 60, rank: "60/70" },
  9: { level: 70, rank: "70/80" },
  10: { level: 70, rank: "70/80" },
  11: { level: 80, rank: "80/80" },
  12: { level: 80, rank: "80/90" },
  13: { level: 90, rank: "90/90" }
};

/**
  initBaseStatus() {
    this.characterStatus = {
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
  }
 */

/**
export const CalculationBase = {
  character: {
    id: 0,
    level: 1,
    levelRank: "001/020",
    constellation: 0
  },
  talentsLevel: {
    normalAttack: 6,
    elementalAttack: 6,
    elementalBurst: 6
  },
  weapon: {
    id: 0,
    level: 0,
    rank: 0
  },
  artifacts: {
    setId: [0, 0],
    flower: {
      star: 0,
      level: 0,
      mainStat: ""
    },
    plume: {
      star: 0,
      level: 0,
      mainStat: ""
    },
    sand: {
      star: 0,
      level: 0,
      mainStat: ""
    },
    goblet: {
      star: 0,
      level: 0,
      mainStat: ""
    },
    circlet: {
      star: 0,
      level: 0,
      mainStat: ""
    }
  },
  extendStatus: {
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
  }
};
*/
