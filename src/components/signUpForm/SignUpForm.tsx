import { SignUpFormWrap } from "./SignUpFormStyle";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { signUpAxios } from "../../api/auth";
import { validator } from "../../util/validator";
import { dataIdInputPropsType } from "../../types/inputData";


function SignUpForm() {

  const inputIdProps: dataIdInputPropsType = {
      "data-testid": "email-input",
  };
  const inputPwProps: dataIdInputPropsType = {
      "data-testid": "password-input",
  };


  const [emailValue, emailHandleChange, validatedEmail] = useInput("",validator.email);
  const [passwordValue, passwordHandleChange, validatedPassWord] = useInput("",validator.password);
  const [passwordCheck, passwordCheckHandleChange] = useInput('',validator.password);
  const isMatchPassword = passwordValue.inputValue === passwordCheck.inputValue
  const isButtonAbled = validatedEmail.value && validatedPassWord.value && isMatchPassword

  const navigate = useNavigate();

    const SignUp = async () => {
        const res = await signUpAxios({
            email: emailValue.inputValue,
            password: passwordValue.inputValue,
        });
        
        if (res?.status === 201) {
            navigate("/signin");
        }
    };

    return (
        <SignUpFormWrap>
            <Box>
                <Typography variant="h4" component="h2">
                    Sign up
                </Typography>
                <TextField
                    id="email"
                    value={emailValue.inputValue}
                    onChange={emailHandleChange}
                    type={"email"}
                    placeholder="이메일을 입력해주세요"
                    inputProps={inputIdProps}
                />
                <Typography className="validationTxt" component="span">
                    {validatedEmail.message}
                </Typography>
                <TextField
                    id="password"
                    value={passwordValue.inputValue}
                    onChange={passwordHandleChange}
                    type={"text"}
                    placeholder="비밀번호를 입력해주세요"
                    inputProps={inputPwProps}
                />
                <Typography className="validationTxt" component="span">
                    {validatedPassWord.message}
                </Typography>
                <TextField
                    id="passwordCheck"
                    value={passwordCheck.inputValue}
                    onChange={passwordCheckHandleChange}
                    type={"text"}
                    placeholder="비밀번호 확인"
                    inputProps={inputPwProps}
                />
                <Typography className="validationTxt" component="span">
                    {isMatchPassword? '' : '비밀번호가 일치하지 않습니다'}
                </Typography>
                <Button
                    onClick={SignUp}
                    disabled={!isButtonAbled}
                    variant="contained"
                    data-testid="signup-button"
                >
                    회원가입
                </Button>
            </Box>
        </SignUpFormWrap>
    );
}

export default SignUpForm;
