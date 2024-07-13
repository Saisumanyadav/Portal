import React, { useState } from "react";
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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CompanyLogo from "../../assets/CompanyLogo.svg";
import LoginComponent from "../LoginSection/LoginComponent";

const navItems = [ "OFFERINGS", "OUR PARTNERS", "PROCESS", "FAQ"];

const HeaderComp = ({ scrollToSection, sections }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleScroll = (item) => {
    switch (item) {
      case "DASHBOARD":
        scrollToSection(sections.dashboardRef);
        break;
      case "OFFERINGS":
        scrollToSection(sections.offeringsRef);
        break;
      case "OUR PARTNERS":
        scrollToSection(sections.partnersRef);
        break;
      case "PROCESS":
        scrollToSection(sections.processRef);
        break;
      case "FAQ":
        scrollToSection(sections.faqRef);
        break;
      default:
        break;
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="headingComp">
        <img className="companylogo" src={CompanyLogo} onClick={handleLogoClick} />
        <div className="dashboardProps">
          <List>
            {navItems.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} onClick={() => handleScroll(item)} />
              </ListItem>
            ))}
          </List>
          <Button className="login" onClick={handleLoginOpen}>
            Login
          </Button>
        </div>
      </div>
      <LoginComponent open={loginOpen} handleClose={handleLoginClose} />
    </>
  );
};

export default HeaderComp;
