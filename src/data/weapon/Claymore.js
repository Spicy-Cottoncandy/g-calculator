/**
 * baseATK[], secondStatus[] は、Lvと突破状態の順で格納。
 * 1/20 = 0, 20/20 = 1, ... 90/90 = 13
 *
 */

export const Claymore = {
  1: {
    name: "無工の剣",
    image: "weapon/Claymore/w_1.png",
    star: 5,
    secondStatusType: "atkPercent",
    baseATK: [46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608],
    secondStatus: [10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6],
    refiningRank: []
  },
  2: {
    name: "松韻の響く頃",
    star: 5,
    secondStatusType: "damageBonus.Physical",
    baseATK: [49, 145, 176, 286, 317, 374, 406, 464, 495, 555, 586, 648, 679, 741],
    secondStatus: [4.5, 8.0, 8.0, 11.6, 11.6, 13.4, 13.4, 15.2, 15.2, 17, 17, 18.9, 18.9, 20.7],
    refiningRank: []
  },
  3: {
    name: "惡王丸",
    star: 4,
    secondStatusType: "atkPercent",
    baseATK: [42, 109, 135, 205, 231, 266, 292, 327, 353, 388, 414, 449, 475, 510],
    secondStatus: [9.0, 15.9, 15.9, 23.2, 23.2, 26.8, 26.8, 30.4, 30.4, 34.1, 34.1, 37.7, 37.7, 41.3],
    refiningRank: []
  }
};
