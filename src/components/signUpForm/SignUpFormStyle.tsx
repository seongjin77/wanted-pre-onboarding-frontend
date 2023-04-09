import styled from "styled-components";

const SignUpFormWrap = styled.form`
    margin-top: 200px;

    .MuiBox-root {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
            background-color: #fff;
            border-radius: 5px;
        }
        .MuiTypography-root {
            padding: 5px;
            &.MuiTypography-h4 {
                color: #1a7cdd;
                padding: 20px;
            }
            &.validationTxt {
                font-size: 12px;
                color: #9e9e9e;
                height: 18px;
            }
        }
        .MuiButtonBase-root {
            margin-top: 10px;
        }
    }
`;

export { SignUpFormWrap };
