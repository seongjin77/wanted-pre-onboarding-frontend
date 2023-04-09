import React,{ ClipboardEventHandler }  from "react";
import { LoginFormWrap, ButtonFlexBox } from "./LoginFromStyle";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

type TestIdInputProps = Partial<
  React.InputHTMLAttributes<HTMLInputElement> & {
    "data-testid"?: string;
    defaultValue?: string | number | readonly string[] | undefined;
    onCopy?: ClipboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }
>;


function LoginForm() {

    const inputIdProps: TestIdInputProps = {
        "data-testid": "email-input",
      };
    const inputPwProps: TestIdInputProps = {
        'data-testid': 'password-input'
    }

  return (
    <LoginFormWrap>
      <Box>
        <Typography variant="h4" component="h2">
          Login
        </Typography>
        <TextField
          id="email"
          type={"email"}
          placeholder="이메일"
          inputProps={inputIdProps}
        />
        <Typography className="validationTxt" component="span">
        </Typography>
        <TextField
          id="password"
          type={"password"}
          placeholder="비밀번호"
          data-testid="password-input"
          inputProps={inputPwProps}
        />
        <Typography className="validationTxt" component="span">
        </Typography>
        <ButtonFlexBox>
          <Button
            variant="contained"
            data-testid="signin-button"
          >
            로그인
          </Button>
          <Button
            variant="contained"
            data-testid="signup-button"
          >
            회원가입
          </Button>
        </ButtonFlexBox>
      </Box>
    </LoginFormWrap>
  )
}

export default LoginForm;
