import { ListItem } from "@mui/material";
import styled from "styled-components";

const TodoLi = styled(ListItem)<{textline? : string}>`
    .MuiInputBase-root{
      width: 80%;
    }

    .MuiListItemText-root{
      text-decoration: ${(props) =>props.textline }
    }
    
  `
  
  
  
export {TodoLi}