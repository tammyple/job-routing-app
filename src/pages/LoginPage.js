import * as React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Stack from "@mui/material/Stack";

const LoginPage = () => {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginForm
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
};

export default LoginPage;
