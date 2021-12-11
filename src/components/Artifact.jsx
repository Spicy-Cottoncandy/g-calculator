import React, { useEffect, useState } from "react";

//Components
import { Grid } from "./Grid";

//Data
import { artifacts } from "../data/artifact/artifacts";

export const ArtifactImage = (props) => {
  const { slot, onClick } = props;
  return (
    <>
      <div className="SelectedArtifact" data-slot={slot} onClick={onClick}>
        <p>なし</p>
      </div>
    </>
  );
};
export const ArtifactImageGrid = (props) => {
  const { onClick, display } = props;
  const [artifactGridItems, setArtifactGridItems] = useState([]);

  useEffect(() => {
    console.log("Artifact load");

    const array = [];

    Object.keys(artifacts).forEach((key) => {
      array.push({ value: key, text: artifacts[key].name, star: artifacts[key].star });
    });

    setArtifactGridItems(array);
  }, []);

  return (
    <>
      <div>
        <Grid
          title={"★5"}
          items={artifactGridItems.filter((item) => item.star === 5)}
          onClick={onClick}
          display={display}
        />
        <Grid
          title={"★4"}
          items={artifactGridItems.filter((item) => item.star === 4)}
          onClick={onClick}
          display={display}
        />
      </div>
    </>
  );
};
