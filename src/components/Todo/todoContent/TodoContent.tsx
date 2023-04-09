import React, { useState } from "react";
import { TodoLi } from "./TodoContentStyle";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Todo } from "../TodoList/TodoList";
import { UpdateAxios } from "../../../api/todo";



type PropsType = {
  item: Todo;
  getTodos: () => Promise<void>
}

const TodoContent = ({ item,getTodos }: PropsType) => {
  const [checked, setChecked] = useState(item.isCompleted);

  const handleCheckToggle = () => {
    setChecked(!checked)
    UpdateAxios(item.id,item.todo,!checked)
  };
   
    return (
        <TodoLi
        secondaryAction={
          <>
            <IconButton data-testid="modify-button" edge="end" aria-label="modificationBtn">
              <EditIcon/>
            </IconButton>
            <IconButton data-testid="delete-button" edge="end" aria-label="deleteBtn">
              <DeleteOutlineRoundedIcon/>
            </IconButton>
          </>
        }
        
        disablePadding
    >
        <ListItemButton
            role={undefined}
            dense
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    onClick={handleCheckToggle}
                />
            </ListItemIcon>
            <ListItemText id={`${item.id}`} primary={`${item.todo}`} />
        </ListItemButton>
    </TodoLi> 
    );
};

export default TodoContent;
