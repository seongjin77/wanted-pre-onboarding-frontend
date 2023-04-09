import { List } from "@mui/material";
import styled from "styled-components";

const TodoListWrap = styled(List)`
    &.MuiList-root {
        overflow-y: scroll;
        height: 100%;
    }

    &.MuiList-root::-webkit-scrollbar {
        width: 8px; 
    }
    &.MuiList-root::-webkit-scrollbar-thumb {
        height: 30%; 
        background: #4d98e3; 

        border-radius: 10px;
    }
    &.MuiList-root::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, 0.1); 
    }
`;
export { TodoListWrap };
