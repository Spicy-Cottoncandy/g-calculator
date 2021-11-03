export const calculateBonus = (base, percent) => {
  return Math.floor(base * (percent / 100));
};
