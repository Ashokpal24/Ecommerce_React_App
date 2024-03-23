import React, { useState, useEffect } from "react";
import { Badge, Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CustomBadgeButton = ({ label, icon, customStyle, badgeStyle }) => {
  let CustomIcon = icon != null ? icon : FavoriteBorderIcon;
  const [count, SetCount] = useState(0);
  const [newStyle, SetNewStyle] = useState({});
  const [newBadgeStyle, SetBadgeNewStyle] = useState({});

  useEffect(() => {
    SetNewStyle(customStyle);
    SetBadgeNewStyle(badgeStyle);
  }, [customStyle]);
  return (
    <ButtonBase
      onClick={() => SetCount(count + 1)}
      sx={{ marginLeft: "12px", ...newStyle }}
    >
      <Badge
        badgeContent={count}
        sx={{
          "& .MuiBadge-badge": {
            background: "#E44D69",
            color: "white",
            ...newBadgeStyle,
          },
        }}
      >
        <CustomIcon
          sx={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
            transition: "0.2s",
            ":hover": {
              color: "red",
            },
          }}
        />
      </Badge>
      <Typography sx={{ marginLeft: "12px" }}>{label}</Typography>
    </ButtonBase>
  );
};

export default CustomBadgeButton;
