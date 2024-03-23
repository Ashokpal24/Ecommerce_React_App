import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomButton = ({
  label,
  setFunc,
  value,
  customStyle,
  customChildStyle,
  startIcon = null,
  endIcon = null,
}) => {
  const [newStyle, SetNewStyle] = useState({});
  const [newChildStyle, SetNewChildStyle] = useState({});

  let NewIcon =
    startIcon != null
      ? startIcon
      : endIcon != null
        ? endIcon
        : KeyboardArrowDownIcon;
  useEffect(() => {
    SetNewStyle(customStyle);
    SetNewChildStyle(customChildStyle);
  }, [customStyle]);
  return (
    <ButtonBase
      onClick={() => setFunc(!value)}
      sx={{
        ...newStyle,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          paddingLeft: "12px",
          paddingRight: "12px",
          ...newChildStyle,
        }}
      >
        <div
          style={{
            fontWeight: "600",
            order: startIcon ? 1 : 0,
          }}
        >
          {label}
        </div>
        <NewIcon
          sx={{
            order: startIcon ? 0 : 1,
          }}
        />
      </Box>
    </ButtonBase>
  );
};
export default CustomButton;
