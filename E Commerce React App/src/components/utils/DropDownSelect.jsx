import React, { useState, useEffect } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import CustomButton from "./CustomButton";

const DropDownSelect = ({
  optionList,
  NewCustomButton = null,
  buttonlabel,
  st,
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
    SetNewStyle(st);
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
        st={newStyle}
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
            value={InputText}
            onChange={(event) => SetInputText(event.target.value)}
            autoFocus
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
                        backgroundColor: "#3bb77e",
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
        </div>
      )}
    </div>
  );
};
export default DropDownSelect;
