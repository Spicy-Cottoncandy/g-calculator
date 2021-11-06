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
