import React, { useEffect, memo } from "react";
import { ButtonBase, Typography } from "@mui/material";

const CustomCard = memo(({ label, offset }) => {
  return (
    <ButtonBase
      sx={{
        width: "250px",
        height: "250px",
        margin: `0px ${offset}px`,
        backgroundColor: "grey",
        borderRadius: "10px",
      }}
    >
      <Typography>{label}</Typography>
    </ButtonBase>
  );
});
const Carousel = () => {
  const itemList = ["card 1", "card 2", "card 3", "card 4"];
  let minCardSize = 250;
  let allowedSpace =
    window.innerWidth / Math.floor(window.innerWidth / (minCardSize + 35 * 2)); //temporary offset before calculating actual offset
  let minOffset = (allowedSpace - minCardSize) / 2;
  let cardAllowed = Math.floor(
    window.innerWidth / (minCardSize + minOffset * 2),
  );
  let stripRef = null;
  let maxLimit = 0;

  useEffect(() => {
    allowedSpace = window.innerWidth / cardAllowed;
    stripRef = document.getElementById("carousel-strip");
    let tempDivWith = allowedSpace * (itemList.length * 2);
    stripRef.style.width = `${tempDivWith}px`;
    maxLimit = tempDivWith / 2 + allowedSpace;
    console.log(
      cardAllowed,
      allowedSpace,
      minOffset,
      allowedSpace * (itemList.length * 2),
      maxLimit,
    );
  }, []);

  setInterval(() => {
    if (stripRef != null) {
      let currLeft = parseInt(stripRef.style.getPropertyValue("left"), 10);
      stripRef.style.transition = "0.3s";
      stripRef.style.left = `${currLeft - allowedSpace}px`;

      if (parseInt(stripRef.style.left, 10) <= -maxLimit) {
        stripRef.style.left = "0px";
        stripRef.style.transition = "0s";
      }
    }
  }, 1000);
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        id="carousel-strip"
        style={{
          width: "200%",
          height: "300px",
          left: "0px",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.3s",
        }}
      >
        {itemList.map((label, index) => (
          <CustomCard key={index} label={label} offset={minOffset} />
        ))}
        {itemList.map((label, index) => (
          <CustomCard key={"dup" + index} label={label} offset={minOffset} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
