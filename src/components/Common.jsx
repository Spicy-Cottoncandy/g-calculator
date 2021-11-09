import React from "react";

export const SelectMenu = (props) => {
  const { items, onChange } = props;
  return (
    <div className="SelectMenu">
      <select name="selectmenu" required onChange={onChange}>
        <option value="">---</option>
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

export const InputNumber = (props) => {
  const { value, item, onChange } = props;
  return (
    <div className="InputNumber">
      <input
        data-item={item}
        type="number"
        className="Input"
        value={value}
        onChange={onChange}
      ></input>
      <div className="text_underline"></div>
    </div>
  );
};
