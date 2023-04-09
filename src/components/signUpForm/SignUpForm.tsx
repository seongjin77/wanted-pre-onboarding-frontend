import React, { ClipboardEventHandler } from "react";
import { SignUpFormWrap } from "./SignUpFormStyle";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

type TestIdInputProps = Partial<
    React.InputHTMLAttributes<HTMLInputElement> & {
        "data-testid"?: string;
        defaultValue?: string | number | readonly string[] | undefined;
        onCopy?: ClipboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
>;

function SignUpForm() {

    const inputIdProps: TestIdInputProps = {
        "data-testid": "email-input",
    };
    const inputPwProps: TestIdInputProps = {
        "data-testid": "password-input",
    };

    const navigate = useNavigate();

    return (
        <SignUpFormWrap>
            <Box>
                <Typography variant="h4" component="h2">
                    Sign up
                </Typography>
                <TextField
                    id="email"
                    type={"email"}
                    placeholder="이메일을 입력해주세요"
                    inputProps={inputIdProps}
                />
                <Typography
                    className="validationTxt"
                    component="span"
                ></Typography>
                <TextField
                    id="password"
                    type={"text"}
                    placeholder="비밀번호를 입력해주세요"
                    inputProps={inputPwProps}
                />
                <Typography
                    className="validationTxt"
                    component="span"
                ></Typography>
                <TextField
                    id="passwordCheck"
                    type={"text"}
                    placeholder="비밀번호 확인"
                    inputProps={inputPwProps}
                />
                <Typography
                    className="validationTxt"
                    component="span"
                ></Typography>
                <Button variant="contained" data-testid="signup-button">
                    회원가입
                </Button>
            </Box>
        </SignUpFormWrap>
    );
}

export default SignUpForm;
