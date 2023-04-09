import React, { ClipboardEventHandler } from "react";
import { useNavigate } from "react-router-dom";
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
        "data-testid": "password-input",
    };

    const navigate = useNavigate();
    const moveSignUp = () => {
        navigate("/signup");
    };

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
                <Typography
                    className="validationTxt"
                    component="span"
                ></Typography>
                <TextField
                    id="password"
                    type={"password"}
                    placeholder="비밀번호"
                    data-testid="password-input"
                    inputProps={inputPwProps}
                />
                <Typography
                    className="validationTxt"
                    component="span"
                ></Typography>
                <ButtonFlexBox>
                    <Button variant="contained" data-testid="signin-button">
                        로그인
                    </Button>
                    <Button onClick={moveSignUp} variant="contained">회원가입</Button>
                </ButtonFlexBox>
            </Box>
        </LoginFormWrap>
    );
}

export default LoginForm;
