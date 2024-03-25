import React from "react";
import { Divider } from "@mui/material";
import CustomButton from "../utils/CustomButton";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";

const CustomHomeButton = () => {
  return (
    <CustomButton
      label={"Home"}
      customStyle={{ width: "90px", height: "48px", borderRadius: "2px" }}
      customChildStyle={{
        ":hover": {
          color: "#3BB77E",
        },
      }}
      startIcon={HomeIcon}
    />
  );
};
const CustomShopButton = () => {
  return (
    <CustomButton
      label={"Shop"}
      customStyle={{ width: "90px", height: "48px", borderRadius: "2px" }}
      customChildStyle={{
        ":hover": {
          color: "#3BB77E",
        },
      }}
      startIcon={StoreIcon}
    />
  );
};
const CustomVendorButton = () => {
  return (
    <CustomButton
      label={"Vendor"}
      customStyle={{ width: "90px", height: "48px", borderRadius: "2px" }}
      customChildStyle={{
        ":hover": {
          color: "#3BB77E",
        },
      }}
      startIcon={PeopleIcon}
    />
  );
};
const CustomAboutUsButton = () => {
  return (
    <CustomButton
      label={"About Us"}
      customStyle={{ width: "120px", height: "48px", borderRadius: "2px" }}
      customChildStyle={{
        ":hover": {
          color: "#3BB77E",
        },
      }}
      startIcon={BookIcon}
    />
  );
};
const CustomBlogButton = () => {
  return (
    <CustomButton
      label={"Blog"}
      customStyle={{
        width: "90px",
        height: "48px",
        borderRadius: "2px",
      }}
      customChildStyle={{
        ":hover": {
          color: "#3BB77E",
        },
      }}
      startIcon={InfoIcon}
    />
  );
};

const SectionStrip = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 99,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "48px",
          // padding: "12px",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "600px",
          }}
        >
          <CustomHomeButton />
          <CustomShopButton />
          <CustomVendorButton />
          <CustomBlogButton />
          <CustomAboutUsButton />
        </div>
      </div>
      <Divider />
    </div>
  );
};
export default SectionStrip;
