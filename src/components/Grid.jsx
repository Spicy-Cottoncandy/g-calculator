import React from "react";

export const Grid = (props) => {
  const { title, items, currentItem, display, onClick } = props;

  let gridClassName = "grid";
  if (!display) {
    gridClassName += " NoDisplay";
  }

  return (
    <>
      <div className={gridClassName}>
        <div key={title} className="title">
          <p>{title}</p>
        </div>
        {items.map((item) => {
          let className = "item";
          if (item.value === currentItem) {
            className += " currentItem";
          }
          return (
            <div key={item.value} className={className} data-itemid={item.value} onClick={onClick}>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
