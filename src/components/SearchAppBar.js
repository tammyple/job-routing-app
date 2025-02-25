import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AuthContext from "../auth/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickLogin = (event) => {
    navigate("/login");
  };

  const handleClickLogout = (event) => {
    auth.signout(() => {
      navigate("/");
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h6"
            edge="start"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
            Job Routing
          </Typography>
          <Search sx={{ flexGrow: 1, ml: 1, maxWidth: "300px", width: "100%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box edge="end" sx={{ flexGrow: 1 }} />
          {auth?.user ? (
            <>
              <AccountCircleIcon />
              <span>web virgil learner</span>
              <Button
                variant="contained"
                type="submit"
                onClick={handleClickLogout}
                startIcon={<LoginIcon sx={{ display: "inline" }} />}
                sx={{
                  ml: 2,
                  display: {
                    xs: "none",
                    sm: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Box
                sx={{ mr: 1, flexGrow: 0, display: { xs: "none", md: "flex" } }}
              >
                <Button
                  onClick={handleClickLogin}
                  variant="contained"
                  type="submit"
                  startIcon={<LoginIcon sx={{ display: "inline" }} />}
                  sx={{
                    ml: 2,
                    display: {
                      xs: "none",
                      sm: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </>
          )}
          <Box
            edge="end"
            sx={{ m: 0, flexGrow: 0, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
