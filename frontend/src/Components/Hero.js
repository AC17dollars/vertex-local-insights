import React, { useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import "./hero.css";
import SignUp from "./SignUp";

function Hero() {
  //menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const profileOpenClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const profileCloseClick = () => {
    setAnchorEl(null);
  };

  //signportal
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [openSignup, setOpenSignup] = React.useState(false);
  const openSignupForm = () => {
    setOpenSignup(true);
  };
  const closeSignup = () => {
    setOpenSignup(false);
  };
  const handleguide = () => {
    openSignupForm();
  };
  const [displaySignIn, setDisplaySignIn] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const handlelogin = () => {
    setDisplaySignIn(true);
  };
  const handleloginclose = () => {
    setDisplaySignIn(false);
  };
  useEffect(() => {
    fetch("http://localhost:3005/auth/login", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.token && setEmail(data.email);
      });
  }, []);
  return (
    <>
      <section className="hero">
        <section className="hero-top">
          <div className="hero-top-left">
            <NavLink
              to="/"
              className="navbar-logo"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#439A97",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                  lineHeight: "1",
                }}
              >
                LOCAL <br /> INSIGHTS
              </Typography>
            </NavLink>
          </div>
          <div className="hero-top-right">
            {email ? (
              <div className="hero-top-right-account">
                <IconButton
                  sx={{ color: "#439A97" }}
                  id="profile-button"
                  aria-controls={open ? "profile-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={profileOpenClick}
                >
                  <AccountCircleIcon
                    sx={{ fontSize: 35, mr: 2 }}
                  ></AccountCircleIcon>
                </IconButton>
                <Menu
                  id="profile-menu"
                  aria-labelledby="profile-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={profileCloseClick}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <NavLink to="/portal" style={{ textDecoration: "none" }}>
                    <MenuItem
                      onClick={profileCloseClick.Close}
                      sx={{
                        color: "#202329",
                        fontSize: 15,
                      }}
                    >
                      My Portal
                    </MenuItem>
                  </NavLink>

                  <MenuItem
                    onClick={handlelogout}
                    sx={{
                      color: "#202329",

                      fontSize: 15,
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
                <Typography
                  sx={{
                    color: "#439A97",
                    fontSize: "1rem",
                    fontFamily: "helvetica",
                    textDecoration: "none",
                  }}
                >
                  User
                </Typography>
              </div>
            ) : (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
                onClick={handlelogin}
              >
                Login
              </Typography>
            )}
            <SignIn open={displaySignIn} onClose={handleloginclose} />
          </div>
        </section>
        <section className="hero-mid">
          <div className="hero-mid-title">
            <Typography
              sx={{
                color: "#439A97",
                fontSize: "3rem",
                fontFamily: "helvetica",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Places you want to explore
            </Typography>
          </div>
          <div className="hero-mid-search">
            <div className="hero-mid-search-icon">
              <SearchIcon sx={{ color: "#439A97" }}></SearchIcon>
            </div>
            <input
              className="hero-mid-search-input"
              type="text"
              placeholder="Search for places you want to visit"
            ></input>
          </div>
          <div className="hero-mid-guide">
            {email ? (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
              >
                Hi, You are logged in
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
                onClick={handleguide}
              >
                Become A Guide
              </Typography>
            )}
            <SignUp
              openSignup={openSignup}
              closeSignup={closeSignup}
              title="Become a guide"
            />
          </div>
        </section>
      </section>
    </>
  );
}
export default Hero;
