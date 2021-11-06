import React from "react";
import { SelectMenu } from "./Common";

export const Character = (props) => {
  const { onChange } = props;
  const characters = [{ value: 1, text: "胡桃" }];
  return (
    <>
      <SelectMenu items={characters} onChange={onChange} />
    </>
  );
};
