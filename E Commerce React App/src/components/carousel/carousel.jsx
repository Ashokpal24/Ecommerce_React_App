import React, { useEffect, memo, useRef } from "react";
import { ButtonBase, Typography } from "@mui/material";

const CustomCard = memo(({ label, offset }) => {
  return (
    <ButtonBase
      sx={{
        width: "150px",
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
  const itemList = [
    "card 1",
    "card 2",
    "card 3",
    "card 4",
    "card 5",
    "card 6",
    "card 7",
    "card 8",
    "card 9",
    "card 10",
    "card 11",
    "card 12",
  ];
  // let carouselID = "carousel-strip" + Math.floor(Math.random() * 100000);
  let minCardSize = 150;
  let allowedSpace =
    window.innerWidth / Math.floor(window.innerWidth / (minCardSize + 10 * 2)); //temporary offset before calculating actual offset
  let minOffset = (allowedSpace - minCardSize) / 2;
  let cardAllowed = Math.floor(
    window.innerWidth / (minCardSize + minOffset * 2),
  );
  let stripRef = useRef(null);
  // let maxLimit = 0;
  let scrollCount = 0;

  useEffect(() => {
    console.log("re-render");
    // stripRef = document.getElementById(carouselID);
    // console.log(stripRef);
    allowedSpace = window.innerWidth / cardAllowed;
    let tempDivWith = allowedSpace * (itemList.length * 2);
    stripRef.current.style.width = `${tempDivWith}px`;
    // maxLimit = tempDivWith / 2 + allowedSpace;
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
    if (stripRef.current != null) {
      scrollCount++;
      // console.log(scrollCount);
      if (scrollCount === itemList.length + 1) {
        // console.log("reset");
        stripRef.current.style.transition = "0s";
        stripRef.current.style.left = "0px";
        scrollCount = 1;
      }
      let currLeft = parseInt(
        getComputedStyle(stripRef.current).getPropertyValue("left"),
        10,
      );
      stripRef.current.style.left = `${currLeft - allowedSpace}px`;
      stripRef.current.style.transition = "0.3s";

      // console.log("pos: ", stripRef.current.style.left);
      // console.log(stripRef.current.style.getPropertyValue("transition"));
    }
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        // id={`${carouselID}`}
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
