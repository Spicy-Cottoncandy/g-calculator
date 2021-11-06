import React from "react";
import { SelectMenu } from "./Common";

export const Level = (props) => {
  const { onChange } = props;
  const levels = [
    { text: "1/20", value: "001/020", level: 1 },
    { text: "20/20", value: "020/020", level: 20 },
    { text: "20/40", value: "020/040", level: 20 },
    { text: "40/40", value: "040/040", level: 40 },
    { text: "40/50", value: "040/050", level: 40 },
    { text: "50/50", value: "050/050", level: 50 },
    { text: "50/60", value: "050/060", level: 50 },
    { text: "60/60", value: "060/060", level: 60 },
    { text: "60/70", value: "060/070", level: 60 },
    { text: "70/70", value: "070/070", level: 70 },
    { text: "70/80", value: "070/080", level: 70 },
    { text: "80/80", value: "080/080", level: 80 },
    { text: "80/90", value: "080/090", level: 80 },
    { text: "90/90", value: "090/090", level: 90 }
  ];

  return (
    <>
      <SelectMenu items={levels} onChange={onChange} />
    </>
  );
};
