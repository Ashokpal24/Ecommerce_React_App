import React, { useState, useEffect } from "react";
import "./header.css";
import { Divider, Box } from "@mui/material";
import DropDownSelect from "../utils/DropDownSelect";
import ButtonBase from "@mui/material/ButtonBase";
import CustomBadgeButton from "../utils/CustomBadgeButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const LocationCustomButton = ({ label, setFunc, value, customStyle }) => {
  const [newStyle, SetNewStyle] = useState({});
  useEffect(() => {
    SetNewStyle(customStyle);
  }, [customStyle]);
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
        border: "2px solid #00e676",
        borderRadius: "2px",
        boxShadow: 2,
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
            justifyContent: "space-around",
          }}
        >
          <div style={{ padding: "12px", width: "120px" }}>
            <h1>E COM</h1>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              width: "600px",
              height: "48px",
              border: "2px solid #00e676",
              borderRadius: "2px",
              boxShadow: 2,
            }}
          >
            <DropDownSelect
              customStyle={{
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
                borderColor: "#00e676",
                height: "80%",
              }}
              orientation="vertical"
            />
            <input
              placeholder="Search for items.."
              style={{
                fontSize: "12px",
                color: "black",
                height: "50%",
                width: "348px",
                outline: "none",
                border: "none",
              }}
            ></input>
            <SearchIcon sx={{ padding: "12px" }} />
          </Box>
          <div style={{ marginLeft: "12px" }}>
            <DropDownSelect
              customStyle={{
                height: "48px",
                width: "120px",
              }}
              optionList={["India", "USA", "China", "Brazil", "Nordic"]}
              NewCustomButton={LocationCustomButton}
              buttonlabel={"Location"}
            />
          </div>
          <CustomBadgeButton
            customStyle={{ width: "120px", height: "48px" }}
            label={"Favorite"}
          />
          <CustomBadgeButton
            customStyle={{ width: "120px", height: "48px" }}
            badgeStyle={{
              background: "#3f51b5",
              color: "white",
            }}
            icon={AddShoppingCartIcon}
            label={"Cart"}
          />
        </div>
      </header>
    </>
  );
};
export default Header;
