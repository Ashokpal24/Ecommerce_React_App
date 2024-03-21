import React, { useState } from "react";
import "./header.css";
import ButtonBase from "@mui/material/ButtonBase";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Divider, Box } from "@mui/material";

const CustomButton = ({ label, setFunc, value }) => {
  return (
    <ButtonBase
      onClick={() => setFunc(!value)}
      sx={{
        height: "100%",
        width: "190px",
        diplay: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        paddingLeft: "12px",
        paddingRight: "12px",
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
const DropDownSelect = () => {
  const [optionList, SetOptionList] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
  ]);
  const [openDropDown, SetOpenDropDown] = useState(false);
  const [currentValue, SetCurrentValue] = useState("All Categories");
  return (
    <div
      style={{
        position: "relative",
        width: "190px",
        height: "100%",
        userSelect: "none",
        fontSize: "12px",
      }}
    >
      <CustomButton
        label={currentValue}
        setFunc={SetOpenDropDown}
        value={openDropDown}
      />
      {openDropDown == true && (
        <div
          style={{
            display: "absolute",
            width: "190px",
            top: "48px",
            left: "0px",
            boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.35)",
            paddingBottom: "12px",
          }}
        >
          <input
            type="text"
            placeholder="Search for items.."
            style={{
              fontSize: "12px",
              color: "black",
              height: "24px",
              width: "80%",
              padding: "12px 8px",
              margin: "12px 10px",
              outline: "1px solid #3bb77e",
              border: "none",
            }}
          ></input>
          <ul
            className="scroll-css"
            style={{
              height: "240px",
              minHeight: "120px",
              overflowY: "scroll",
            }}
          >
            {optionList.map((item, index) => (
              <Box
                onClick={() => {
                  SetCurrentValue(item), SetOpenDropDown(!openDropDown);
                }}
                sx={{
                  padding: "12px",
                  transition: "0.2s",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#3bb77e",
                  },
                }}
                key={item + index}
              >
                {item}
              </Box>
            ))}
          </ul>
        </div>
      )}
    </div>
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
            <DropDownSelect />
            <Divider
              sx={{
                marginRight: "12px",
                borderColor: "#3bb77e",
                height: "80%",
              }}
              orientation="vertical"
            />
            <input
              placeholder="Search for items.."
              style={{
                fontSize: "18px",
                color: "black",
                height: "50%",
                width: "348px",
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
