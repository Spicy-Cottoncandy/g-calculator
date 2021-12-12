import React, { useEffect, useState } from "react";

//Components
import { Grid } from "./Grid";

//Data
import { artifacts } from "../data/artifact/artifacts";

export const ArtifactSlot = (props) => {
  const { slot, itemId, display, onClickImage, onClickGridItem } = props;

  return (
    <>
      <div className="ArtifactImage">
        <ArtifactImage itemId={itemId} onClick={onClickImage} />
      </div>
      <div className={display ? "" : "NoDisplay"}>
        <ArtifactImageGrid onClick={onClickGridItem} />
      </div>
    </>
  );
};

export const ArtifactImage = (props) => {
  const { itemId, onClick } = props;
  const imagePath = "../image/" + artifacts[itemId].image;

  return (
    <>
      <div className="SelectedArtifact" onClick={onClick}>
        <img src={imagePath} alt={artifacts[itemId].name} />
      </div>
    </>
  );
};

export const ArtifactText = (props) => {
  const { itemId } = props;
  return <p>{artifacts[itemId].name}</p>;
};

export const ArtifactImageGrid = (props) => {
  const { onClick } = props;
  const [artifactGridItems, setArtifactGridItems] = useState([]);

  useEffect(() => {
    console.log("Artifact load");

    const array = [];

    Object.keys(artifacts).forEach((key) => {
      const image = "../image/" + artifacts[key].image;
      array.push({ value: key, text: artifacts[key].name, star: artifacts[key].star, image: image });
    });

    setArtifactGridItems(array);
  }, []);

  return (
    <>
      <div className="ModalBackground" onClick={onClick}></div>
      <div className="ArtifactImageGrid">
        <Grid title={"★5"} items={artifactGridItems.filter((item) => item.star === 5)} onClick={onClick} />
        <Grid title={"★4"} items={artifactGridItems.filter((item) => item.star === 4)} onClick={onClick} />
        <Grid title={"---"} items={artifactGridItems.filter((item) => item.star === 0)} onClick={onClick} />
      </div>
    </>
  );
};
