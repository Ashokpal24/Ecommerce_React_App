import React, { useRef } from "react";
import "./header.css";
import ButtonBase from "@mui/material/ButtonBase";
import SearchIcon from "@mui/icons-material/Search";
const CustomButton = ({ label }) => {
  return (
    <ButtonBase
      sx={{
        height: "100%",
        cursor: "pointer",
        userSelect: "none",
        fontSize: "18px",
        width: "50%",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
    >
      <div>{label}</div>
    </ButtonBase>
  );
};
const Header = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          height: "80px",
          margin: "auto",
          padding: "12px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <div style={{ padding: "12px", width: "120px" }}>
            <h1>E COM</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              width: "600px",
              height: "48px",
              border: "1px solid #3bb77e",
            }}
          >
            <CustomButton label={"All Categories"} />

            <div
              style={{
                color: "grey",
                paddingRight: "12px",
                userSelect: "none",
              }}
            >
              |
            </div>
            <input
              placeholder="Search for items.."
              style={{
                fontSize: "18px",
                color: "black",
                height: "50%",
                width: "100%",
                outline: "none",
                border: "none",
              }}
            ></input>
            <SearchIcon sx={{ padding: "12px" }} />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
