import React from "react";
import "./header.css";
import { Box, Divider } from "@mui/material";
import CustomButton from "../utils/CustomButton";
import DropDownSelect from "../utils/DropDownSelect";
import CustomBadgeButton from "../utils/CustomBadgeButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const LoginCustomButton = () => {
  return (
    <CustomButton
      startIcon={PersonIcon}
      customStyle={{
        width: "90px",
        height: "48px",
        // border: "2px solid #00e676",
        transition: "0.2s",
        borderRadius: "2px",
      }}
      customChildStyle={{
        justifyContent: "center",
        ":hover": {
          transition: "0.2s",
          color: "#3BB77E",
        },
      }}
      label={"Login"}
    />
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
            <h1 style={{ userSelect: "none" }}>E COM</h1>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "600px",
              height: "48px",
              border: "2px solid #3BB77E",
              borderRadius: "2px",
            }}
          >
            <input
              placeholder="Search for items.."
              style={{
                fontSize: "12px",
                color: "black",
                height: "50%",
                width: "80%",
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
                border: "2px solid #3BB77E",
                borderRadius: "2px",
              }}
              customButtonStyle={{
                height: "48px",
                width: "120px",
              }}
              optionList={["India", "USA", "China", "Brazil", "Nordic"]}
              buttonlabel={"Location"}
              startIcon={LocationOnIcon}
            />
          </div>
          <div>
            <CustomBadgeButton
              customStyle={{
                width: "120px",
                height: "48px",
                borderRadius: "2px",
              }}
              label={"Favorite"}
            />
            <CustomBadgeButton
              customStyle={{
                width: "90px",
                height: "48px",
                borderRadius: "2px",
              }}
              customChildStyle={{
                ":hover": {
                  color: "blue",
                },
              }}
              badgeStyle={{
                background: "#3f51b5",
                color: "white",
              }}
              icon={AddShoppingCartIcon}
              label={"Cart"}
            />
            <LoginCustomButton />
          </div>
        </div>
      </header>
      <Divider />
    </>
  );
};
export default Header;
