import React from "react";

export const SelectMenu = (props) => {
  const { items, isRequired, onChange } = props;
  return (
    <div className="SelectMenu">
      <select name="selectmenu" required onChange={onChange}>
        {!isRequired && <option value="">---</option>}
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
        placeholder="0"
        value={value !== 0 && value}
        onChange={onChange}
      ></input>
      <div className="text_underline"></div>
    </div>
  );
};
