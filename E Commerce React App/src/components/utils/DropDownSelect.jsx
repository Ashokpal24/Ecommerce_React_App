import React, { useState, useEffect } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import CustomButton from "./CustomButton";
import { ClickAwayListener, Box } from "@mui/material";

const DropDownSelect = ({
  optionList,
  NewCustomButton = null,
  buttonlabel,
  customStyle,
}) => {
  const TempCustomButton =
    NewCustomButton != null ? NewCustomButton : CustomButton;
  const [InputText, SetInputText] = useState("");
  const [filteredList, SetfilteredList] = useState([]);
  const [openDropDown, SetOpenDropDown] = useState(false);
  const [currentValue, SetCurrentValue] = useState();
  const [newStyle, SetNewStyle] = useState({});

  useEffect(() => {
    SetfilteredList(optionList);
    SetCurrentValue(buttonlabel);
    SetNewStyle(customStyle);
  }, []);
  useEffect(() => {
    if (InputText == "") {
      SetfilteredList(optionList);
    } else {
      SetfilteredList(
        optionList.filter((item, index) => item.includes(InputText)),
      );
    }
  }, [InputText]);
  return (
    <ClickAwayListener onClickAway={() => SetOpenDropDown(false)}>
      <div
        style={{
          position: "relative",
          userSelect: "none",
          fontSize: "12px",
          ...newStyle,
        }}
      >
        <TempCustomButton
          label={currentValue}
          setFunc={SetOpenDropDown}
          value={openDropDown}
          customStyle={newStyle}
        />
        {openDropDown == true && (
          <Box
            sx={{
              display: "absolute",
              width: newStyle.width != undefined ? newStyle.width : "190px",
              top: "48px",
              left: "0px",
              boxShadow: 4,
              paddingBottom: "12px",
              zIndex: 100,
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
                width: "60%",
                padding: "12px 5%",
                margin: "12px 15%",
                outline: "2px solid #00e676",
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
                        SetCurrentValue(item), SetOpenDropDown(!openDropDown);
                      }}
                      sx={{
                        width: "100%",
                        justifyContent: "start",
                        padding: "12px 18px",
                        margin: 0,
                        transition: "0.2s",
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
