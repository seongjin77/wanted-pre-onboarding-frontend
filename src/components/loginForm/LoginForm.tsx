import React from "react";
import { LoginFormWrap, ButtonFlexBox } from "./LoginFromStyle";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function LoginForm() {

  return (
    <LoginFormWrap>
    <Box>
        <Typography variant="h4" component="h2">
            Login
        </Typography>
        <TextField
            value={logInEmail.inputValue}
            id="email"
            type={"email"}
            placeholder="이메일"
            data-testid="email-input"
            onChange={emailHandleChange}
        />
        <Typography className="validationTxt" component="span">
            {validatedEmail.message}
        </Typography>
        <TextField
            value={logInPassword.inputValue}
            id="password"
            type={"password"}
            placeholder="비밀번호"
            data-testid="password-input"
            onChange={passwordHandleChange}
        />
        <Typography className="validationTxt" component="span">
            {validatedPassWord.message}
        </Typography>
        <ButtonFlexBox>
            <Button
                disabled={!isButtonAbled}
                variant="contained"
                data-testid="signin-button"
                onClick={signIn}
            >
                로그인
            </Button>
            <Button
                variant="contained"
                onClick={moveSignUp}
                data-testid="signup-button"
            >
                회원가입
            </Button>
        </ButtonFlexBox>
    </Box>
</LoginFormWrap>
  )
}

export default LoginForm