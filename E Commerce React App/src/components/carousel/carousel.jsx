import React, { useEffect, memo, useRef } from "react";
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
  let carouselID = "carousel-strip" + Math.floor(Math.random() * 100000);
  let minCardSize = 250;
  let allowedSpace =
    window.innerWidth / Math.floor(window.innerWidth / (minCardSize + 35 * 2)); //temporary offset before calculating actual offset
  let minOffset = (allowedSpace - minCardSize) / 2;
  let cardAllowed = Math.floor(
    window.innerWidth / (minCardSize + minOffset * 2),
  );
  let stripRef = null;
  let maxLimit = 0;
  let scrollCount = 0;

  useEffect(() => {
    console.log("re-render");
    stripRef = document.getElementById(carouselID);
    console.log(stripRef);
    allowedSpace = window.innerWidth / cardAllowed;
    let tempDivWith = allowedSpace * (itemList.length * 2);
    stripRef.style.width = `${tempDivWith}px`;
    maxLimit = tempDivWith / 2 + allowedSpace;
    // console.log(
    //   cardAllowed,
    //   allowedSpace,
    //   minOffset,
    //   allowedSpace * (itemList.length * 2),
    //   maxLimit,
    // );
  }, []);
  setInterval(scrolling, 800);
  function scrolling() {
    if (stripRef != null) {
      scrollCount++;
      console.log(scrollCount);
      if (scrollCount === itemList.length + 1) {
        console.log("reset");
        stripRef.style.transition = "0s";
        stripRef.style.left = "0px";
        scrollCount = 1;
        setTimeout(() => {
          let currLeft = parseInt(stripRef.style.getPropertyValue("left"), 10);
          stripRef.style.left = `${currLeft - allowedSpace}px`;
          stripRef.style.transition = "0.3s";
        }, 0);
      } else {
        let currLeft = parseInt(stripRef.style.getPropertyValue("left"), 10);
        stripRef.style.left = `${currLeft - allowedSpace}px`;
        stripRef.style.transition = "0.3s";
      }

      // console.log("pos: ", stripRef.current.style.left);
      // console.log(stripRef.current.style.getPropertyValue("transition"));
    }
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        id={`${carouselID}`}
        ref={stripRef}
        style={{
          width: "200%",
          height: "300px",
          left: "0px",
          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
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
