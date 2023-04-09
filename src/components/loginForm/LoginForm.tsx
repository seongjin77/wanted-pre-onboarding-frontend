import { useNavigate } from "react-router-dom";
import { LoginFormWrap, ButtonFlexBox } from "./LoginFromStyle";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { signInAxios } from "../../api/auth";
import { useInput } from "../../hooks/useInput";
import { validator } from "../../util/validator";
import { dataIdInputPropsType } from "../../types/inputData";


function LoginForm() {

    const inputIdProps: dataIdInputPropsType = {
        "data-testid": "email-input",
    };
    const inputPwProps: dataIdInputPropsType = {
        "data-testid": "password-input",
    };

    const navigate = useNavigate();
    const [logInEmail, emailHandleChange, validatedEmail] = useInput("",validator.email);
    const [logInPassword, passwordHandleChange, validatedPassWord] = useInput("",validator.password
);
    const isButtonAbled = validatedEmail.value && validatedPassWord.value;

    const moveSignUp = () => {
        navigate("/signup");
    };

    const signIn = async () => {
        const res = await signInAxios({
            email: logInEmail.inputValue,
            password: logInPassword.inputValue,
        });
        if (res?.status === 200) {
            localStorage.setItem("accessToken", res.data.access_token);
        }
        navigate("/todo");
    };

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
                    inputProps={inputIdProps}
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
                    inputProps={inputPwProps}
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
    );
}

export default LoginForm;
