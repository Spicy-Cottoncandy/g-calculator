/**
 * baseATK, secondStatus は、Lvと突破状態の順で格納。
 * 1/20 = 0, 20/20 = 1, ... 90/90 = 13
 *
 */

export const Claymore = {
  1: {
    name: "無工の剣",
    star: 5,
    secondStatusType: "atkPercent",
    baseATK: [46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608],
    secondStatus: [10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6],
    refiningRank: []
  },
  2: {
    name: "無工の剣2",
    star: 5,
    secondStatusType: "atkPercent",
    baseATK: [46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608],
    secondStatus: [10.8, 19.1, 19.1, 27.8, 27.8, 32.2, 32.2, 36.5, 36.5, 40.9, 40.9, 45.3, 45.3, 49.6],
    refiningRank: []
  }
};
