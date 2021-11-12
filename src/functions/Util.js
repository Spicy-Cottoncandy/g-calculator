export const calculateBonus = (base, percent) => {
  return Math.floor(base * (percent / 100));
};

export const calculateBonusPercent = (base, percent) => {
  return Math.floor(base * (percent / 100));
};

export const floorStatus = (value, precision) => {
  if (isNaN(precision) || precision < 0) {
    console.log("floorStatus :precision = ", precision);
    precision = 0;
  }
  return Math.floor(value * 10 ** precision) / 10 ** precision;
};
