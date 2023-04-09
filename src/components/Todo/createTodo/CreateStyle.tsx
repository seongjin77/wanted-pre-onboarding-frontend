import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";

const TodoInput = styled(TextField)`
    background-color: white;
    width: 100%;
`;
const CreateButton = styled(IconButton)`
    &.MuiButtonBase-root {
        padding: 0;
    }
    .MuiSvgIcon-root {
        width: 50px;
        height: 50px;
    }
`;

export { TodoInput, CreateButton };

