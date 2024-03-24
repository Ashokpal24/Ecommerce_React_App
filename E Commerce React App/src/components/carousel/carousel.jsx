import React, { useEffect, memo } from "react";
import { ButtonBase, Typography } from "@mui/material";

const CustomCard = memo(({ label }) => {
  return (
    <ButtonBase
      sx={{
        width: "250px",
        height: "250px",
        margin: "0px 35px",
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
  let stripWidth = 0;
  let allowedSpace = 0;
  let cardSize = 250;
  let stripRef = null;
  let maxLimit = 0;
  let parentsize = 0;
  useEffect(() => {
    stripRef = document.getElementById("carousel-strip");
    stripWidth = stripRef.getBoundingClientRect().width;
    allowedSpace = stripWidth / 2 / 4;
    maxLimit = stripWidth / 2 + allowedSpace;
  }, []);

  setInterval(() => {
    if (stripRef != null) {
      let currLeft = parseInt(stripRef.style.getPropertyValue("left"), 10);
      stripRef.style.transition = "0.3s";
      stripRef.style.left = `${currLeft - allowedSpace}px`;

      if (parseInt(stripRef.style.left, 10) == -maxLimit) {
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
          <CustomCard key={index} label={label} />
        ))}
        {itemList.map((label, index) => (
          <CustomCard key={"dup" + index} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
