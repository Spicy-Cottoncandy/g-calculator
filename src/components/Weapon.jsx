import React, { useEffect, useState } from "react";
//components
import { SelectMenu } from "./Common";
import { Grid } from "./Grid";
//data
import { weapons } from "../data/weapon/weapons";

const levels = [
  { text: "1/20", value: 0 },
  { text: "20/20", value: 1 },
  { text: "20/40", value: 2 },
  { text: "40/40", value: 3 },
  { text: "40/50", value: 4 },
  { text: "50/50", value: 5 },
  { text: "50/60", value: 6 },
  { text: "60/60", value: 7 },
  { text: "60/70", value: 8 },
  { text: "70/70", value: 9 },
  { text: "70/80", value: 10 },
  { text: "80/80", value: 11 },
  { text: "80/90", value: 12 },
  { text: "90/90", value: 13 }
];

const refiningRanks = [
  { value: 0, text: "Rank0" },
  { value: 1, text: "Rank1" },
  { value: 2, text: "Rank2" },
  { value: 3, text: "Rank3" },
  { value: 4, text: "Rank4" },
  { value: 5, text: "Rank5" }
];

export const WeaponImage = (props) => {
  const { text, itemId, onClick } = props;
  return (
    <div className="SelectItem" onClick={onClick}>
      <p>{itemId !== null ? text : "指定なし"}</p>
    </div>
  );
};

export const WeaponImageGrid = (props) => {
  const { weaponType, display, onClick } = props;
  const [weaponGridItems, setWeaponGridItems] = useState([]);

  useEffect(() => {
    console.log(weaponType);

    const array = [];
    if (weaponType === null) {
      setWeaponGridItems([]);
      return;
    }

    Object.keys(weapons[weaponType]).forEach((key) => {
      array.push({ value: key, text: weapons[weaponType][key].name, star: weapons[weaponType][key].star });
    });

    setWeaponGridItems(array);
  }, [weaponType]);

  return (
    <>
      <div>
        <Grid
          title={"★5"}
          items={weaponGridItems.filter((item) => item.star === 5)}
          onClick={onClick}
          display={display}
        />
        <Grid
          title={"★4"}
          items={weaponGridItems.filter((item) => item.star === 4)}
          onClick={onClick}
          display={display}
        />
      </div>
    </>
  );
};

export const WeaponLevel = (props) => {
  const { onChange } = props;

  return (
    <>
      <SelectMenu items={levels} isRequired={true} onChange={onChange} />
    </>
  );
};

export const WeaponRank = (props) => {
  const { onChange } = props;
  return (
    <>
      <SelectMenu items={refiningRanks} isRequired={true} onChange={onChange} />
    </>
  );
};
