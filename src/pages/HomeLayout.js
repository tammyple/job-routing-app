import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const HomeLayout = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <SearchAppBar />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
};

export default HomeLayout;
