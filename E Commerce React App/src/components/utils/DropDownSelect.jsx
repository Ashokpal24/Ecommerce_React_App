import React, { useState, useEffect, useCallback } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import CustomButton from "./CustomButton";
import { ClickAwayListener, Box } from "@mui/material";

const DropDownSelect = ({
  optionList,
  buttonlabel,
  customStyle = null,
  customButtonStyle = null,
  startIcon = null,
  endIcon = null,
}) => {
  const [InputText, SetInputText] = useState("");
  const [filteredList, SetfilteredList] = useState([]);
  const [openDropDown, SetOpenDropDown] = useState(false);
  const [currentValue, SetCurrentValue] = useState();
  const [newStyle, SetNewStyle] = useState({});
  const [newButtonStyle, SetNewButtonStyle] = useState({});

  useEffect(() => {
    SetfilteredList(optionList);
    SetCurrentValue(buttonlabel);
    SetNewStyle(customStyle);
    SetNewButtonStyle(customButtonStyle);
  }, []);
  useEffect(() => {
    if (InputText == "") {
      SetfilteredList(optionList);
    } else {
      SetfilteredList(
        optionList.filter((item, index) =>
          item.toLowerCase().includes(InputText),
        ),
      );
    }
  }, [InputText]);
  const handleSetOpen = useCallback(() => {
    SetOpenDropDown(!openDropDown);
  }, [openDropDown]);
  return (
    <ClickAwayListener onClickAway={() => SetOpenDropDown(false)}>
      <div
        style={{
          position: "relative",
          userSelect: "none",
          fontSize: "12px",
          width: "190px",
          height: "48px",
          zIndex: 100,
          ...newStyle,
        }}
      >
        <CustomButton
          label={currentValue}
          callBackFunc={handleSetOpen}
          customStyle={newButtonStyle}
          startIcon={startIcon}
          endIcon={endIcon}
        />
        {openDropDown == true && (
          <Box
            sx={{
              display: "absolute",
              width: newStyle != null ? newStyle.width : "190px",
              top: "48px",
              left: "0px",
              boxShadow: 4,
              paddingBottom: "6px",
              backgroundColor: "white",
            }}
          >
            <input
              type="text"
              placeholder="Search ..."
              value={InputText}
              onChange={(event) => SetInputText(event.target.value)}
              autoFocus
              style={{
                fontSize: "12px",
                color: "black",
                height: "24px",
                width: "70%",
                padding: "12px 7.5%",
                margin: "12px 7.5%",
                outline: "2px solid #3BB77E",
                borderRadius: "2px",
                border: "none",
              }}
            ></input>
            <ul
              className="scroll-css"
              style={{
                maxHeight: "176px",
                overflowY: "scroll",
              }}
            >
              {filteredList.length > 0 ? (
                filteredList.map((item, index) => (
                  <li style={{ width: "100%" }} key={item + index}>
                    <ButtonBase
                      onClick={() => {
                        SetCurrentValue(item);
                        SetOpenDropDown(!openDropDown);
                      }}
                      sx={{
                        width: "100%",
                        justifyContent: "start",
                        padding: "12px 18px",
                        margin: 0,
                        transition: "0.2s",
                        backgroundColor:
                          currentValue == item ? "lightgrey" : "white",
                        color: "black",
                        cursor: "pointer",
                        ":hover": {
                          backgroundColor: "grey",
                          color: "white",
                        },
                      }}
                    >
                      {item}
                    </ButtonBase>
                  </li>
                ))
              ) : (
                <>
                  <ButtonBase
                    onClick={() => SetOpenDropDown(!openDropDown)}
                    sx={{
                      width: "100%",
                      justifyContent: "start",
                      padding: "12px",
                      margin: 0,
                      transition: "0.2s",
                      cursor: "pointer",
                    }}
                  >
                    No item found!
                  </ButtonBase>
                </>
              )}
            </ul>
          </Box>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default DropDownSelect;
