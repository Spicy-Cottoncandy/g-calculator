import React from "react";

const normalAttacks = [
  { value: 1, text: "Lv.1" },
  { value: 2, text: "Lv.2" },
  { value: 3, text: "Lv.3" },
  { value: 4, text: "Lv.4" },
  { value: 5, text: "Lv.5" },
  { value: 6, text: "Lv.6" },
  { value: 7, text: "Lv.7" },
  { value: 8, text: "Lv.8" },
  { value: 9, text: "Lv.9" },
  { value: 10, text: "Lv.10" },
  { value: 11, text: "Lv.11" }
];

const elementalAttacks = [
  { value: 1, text: "Lv.1" },
  { value: 2, text: "Lv.2" },
  { value: 3, text: "Lv.3" },
  { value: 4, text: "Lv.4" },
  { value: 5, text: "Lv.5" },
  { value: 6, text: "Lv.6" },
  { value: 7, text: "Lv.7" },
  { value: 8, text: "Lv.8" },
  { value: 9, text: "Lv.9" },
  { value: 10, text: "Lv.10" }
];

export const TalentsLevel = (props) => {
  const { talentsLevel, onChange } = props;

  return (
    <>
      <div className="TalentLevelArea">
        <div className="">
          <p>通常攻撃</p>
          <SelectMenuTalentLevel
            items={normalAttacks}
            itemName={"normalAttack"}
            defaultValue={talentsLevel.normalAttack}
            onChange={onChange}
          />
        </div>
        <div className="">
          <p>元素スキル</p>
          <SelectMenuTalentLevel
            items={elementalAttacks}
            itemName={"elementalAttack"}
            defaultValue={talentsLevel.elementalAttack}
            onChange={onChange}
          />
        </div>
        <div className="">
          <p>元素爆発</p>
          <SelectMenuTalentLevel
            items={elementalAttacks}
            itemName={"elementalBurst"}
            defaultValue={talentsLevel.elementalBurst}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export const SelectMenuTalentLevel = (props) => {
  const { items, itemName, defaultValue, onChange } = props;
  return (
    <div className="SelectMenu">
      <select
        name="selectmenu"
        data-item={itemName}
        required
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {items.map((item, index) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
