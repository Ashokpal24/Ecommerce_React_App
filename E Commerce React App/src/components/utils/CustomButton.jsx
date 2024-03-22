import React, { useState, useEffect } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomButton = ({ label, setFunc, value, st }) => {
  const [newStyle, SetNewStyle] = useState({});
  useEffect(() => {
    SetNewStyle(st);
  }, [st]);
  return (
    <ButtonBase
      onClick={() => setFunc(!value)}
      sx={{
        diplay: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        cursor: "pointer",
        paddingLeft: "12px",
        paddingRight: "12px",
        ...newStyle,
      }}
    >
      <div
        style={{
          fontWeight: "600",
        }}
      >
        {label}
      </div>
      <KeyboardArrowDownIcon
        sx={{
          justifySelf: "end",
        }}
      />
    </ButtonBase>
  );
};
export default CustomButton;
