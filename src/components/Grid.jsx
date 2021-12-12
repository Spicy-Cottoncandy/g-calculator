import React from "react";

export const Grid = (props) => {
  const { title, items, currentItem, onClick } = props;

  let gridClassName = "grid";

  console.log("Grid load");

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
              {item.image ? <img src={item.image} alt={item.name} /> : <p>{item.text}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};
