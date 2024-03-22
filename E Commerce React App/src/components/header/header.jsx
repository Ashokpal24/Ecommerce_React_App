import React, { useState, useEffect } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, IconButton, Badge } from "@mui/material";
import DropDownSelect from "../utils/DropDownSelect";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonBase from "@mui/material/ButtonBase";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LocationCustomButton = ({ label, setFunc, value, st }) => {
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
        justifyContent: "center",
        cursor: "pointer",
        paddingLeft: "12px",
        paddingRight: "12px",
        border: "1px solid #3bb77e",
        boxShadow: 3,
        ...newStyle,
      }}
    >
      <LocationOnIcon
        sx={{
          justifySelf: "start",
        }}
      />
      <div
        style={{
          fontWeight: "600",
        }}
      >
        {label}
      </div>
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
            <DropDownSelect
              st={{
                height: "48px",
                width: "190px",
              }}
              optionList={[
                "item1",
                "item2",
                "item3",
                "item4",
                "item5",
                "item6",
                "item7",
                "item8",
              ]}
              buttonlabel={"All Categories"}
            />
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
          <div style={{ marginLeft: "12px" }}>
            <DropDownSelect
              st={{
                height: "48px",
                width: "190px",
              }}
              optionList={["India", "USA", "China", "Brazil", "Nordic"]}
              NewCustomButton={LocationCustomButton}
              buttonlabel={"Location"}
            />
          </div>
          <IconButton sx={{ marginLeft: "12px" }}>
            <Badge badgeContent={4} color="3bb77e">
              <FavoriteBorderIcon
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
          </IconButton>
        </div>
      </header>
    </>
  );
};
export default Header;
