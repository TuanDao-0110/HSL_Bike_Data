import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import logo from "../assets/logo.png";
import solitaLogo from "../assets/solita.png";
import { useDispatch, useSelector } from "react-redux";
import { setEng, setFin, setSE } from "../redux/langague_reducer";
import { FI, SE, UK } from "../ultilities/language";
import { RootState } from "../redux/store";
const Header = () => {
  const [language, setLanguage] = useState<String>(UK);
  const dispatch = useDispatch();
  const changeLanguage = (value: string): void => {
    if (value === UK) {
      dispatch(setEng());
    }
    if (value === SE) {
      dispatch(setSE());
    }
    if (value === FI) {
      dispatch(setFin());
    }
  };
  const { nav } = useSelector((state: RootState) => state.languageSlicer);
  return (
    <div className="">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className=" md:text-3xl flex justify-center items-center gap-5">
              <Link to={"/"}>
                <img src={logo} width={80} height={80} alt="" />
              </Link>
              <Link to={"/"}>
                <img src={solitaLogo} width={80} height={80} alt="" />
              </Link>
            </div>
            <div className="md:hidden">
              <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    className="hidden"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row hidden md:block -mx-2 justify-center items-center">
            <NavLink to={"journey"}>
              <Button disableElevation disableFocusRipple disableRipple>
                {" "}
                {nav?.routerJourney}
              </Button>
            </NavLink>
            <NavLink to={"station"}>
              <Button> {nav?.routerStation}</Button>
            </NavLink>
            <FormControl
              sx={{
                m: 1,
                color: "wheat",
              }}
              variant="standard"
            >
              <Select
                sx={{
                  color: "#1C87C9",
                }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  changeLanguage(e.target.value as string);
                }}
              >
                <MenuItem value={UK}>🇬🇧</MenuItem>
                <MenuItem value={FI}>🇫🇮</MenuItem>
                <MenuItem value={SE}>🇸🇪</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
