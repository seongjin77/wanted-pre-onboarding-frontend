import React, { useState } from "react";
import { TodoLi } from "./TodoContentStyle";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Input from '@mui/material/Input';
import { Todo } from "../TodoList/TodoList";
import { UpdateAxios, deleteTodoAxios } from "../../../api/todo";
import { useInput } from "../../../hooks/useInput";
import { dataIdInputPropsType } from "../../../types/inputData";

type PropsType = {
  item: Todo;
  getTodos: () => Promise<void>
}

type EditInputPropsType = dataIdInputPropsType & {
  'aria-label' : string;
}

const TodoContent = ({ item,getTodos }: PropsType) => {
  
  const [checked, setChecked] = useState(item.isCompleted);
  const [edit, setEdit] = useState(false);
  const [editText, editTextChange] = useInput(item.todo);
  const editInputProps : EditInputPropsType = {
    "data-testid" : "modify-input",
    'aria-label': 'editInput'
  }

  // 완료여부 수정
  const handleCheckToggle = () => {
    setChecked(!checked)
    UpdateAxios(item.id,item.todo,!checked)
  };

  // 투두 삭제
  const toDoDelete = async () => {
    if(!window.confirm('삭제하시겠습니까?')){
      return
    }
    await deleteTodoAxios(item.id)
    await getTodos();
  }

  // 수정 취소, 수정 버튼
  const handleEdit = () => {
    setEdit(!edit)
    editText.setInputValue(item.todo);

  }
  // 수정 완료 버튼
  const editComplete = async () => {
    if(!window.confirm('수정하시겠습니까?')){
      return
    }

   await UpdateAxios(item.id, editText.inputValue,checked)
   await getTodos();
    setEdit(!edit)
}

   
    return (
      <>
      {edit ?
        <TodoLi
        secondaryAction={
          <>
            <IconButton data-testid="submit-button" onClick={editComplete} edge="end" aria-label="CompletedBtn">
              <TaskAltIcon/>
            </IconButton>
            <IconButton data-testid="cancel-button" onClick={handleEdit} edge="end" aria-label="cancelBtn">
              <HighlightOffIcon/>
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
                    inputProps={{ "aria-labelledby" : `${item.id}` }}
                    onClick={handleCheckToggle}
                />
            </ListItemIcon>
            <Input value={editText.inputValue} onChange={editTextChange} inputProps={editInputProps} />
        </ListItemButton>
    </TodoLi>
    :
    <TodoLi
    textline = { checked ? 'line-through' : 'initial'}
    secondaryAction={
      <>
        <IconButton onClick={handleEdit} data-testid="modify-button" edge="end" aria-label="modificationBtn">
          <EditIcon/>
        </IconButton>
        <IconButton onClick={toDoDelete} data-testid="delete-button" edge="end" aria-label="deleteBtn">
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
                inputProps={{ "aria-labelledby": `${item.id}` }}
                onClick={handleCheckToggle}
            />
        </ListItemIcon>
        <ListItemText id={`${item.id}`} primary={`${item.todo}`} />
    </ListItemButton>
  </TodoLi> 
      }
      </>
    );
};

export default TodoContent;
