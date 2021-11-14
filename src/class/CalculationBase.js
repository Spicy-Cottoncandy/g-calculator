//import { characters } from "../data/character/characters";
import { Status } from "./Status";

export class CalculationBase {
  constructor() {
    this.character = {
      id: 0,
      level: 1,
      levelRank: "001/020",
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
    this.baseStatus = new Status();
    this.extendStatus = new Status();
  }

  initBaseStatus() {
    this.baseStatus = {
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
}

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
