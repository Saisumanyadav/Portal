import React from "react";
import "./HeaderComp.scss";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CompanyLogo from "../../assets/CompanyLogo.svg";

const navItems = ["OFFERINGS", "OUR PARTNERS", "PROCESS", "FAQ"];

export default function HeaderComp() {
  return (
    <>
      <div className="headingComp">
        <img className="companylogo" src={CompanyLogo} />
        <div className="dashboardProps">
          <List>
            {navItems.map((item, index) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Button className="login">Login</Button>
        </div>
      </div>
    </>
  );
}
