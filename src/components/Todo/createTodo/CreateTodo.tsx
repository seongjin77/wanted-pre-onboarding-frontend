import { Grid } from "@mui/material";
import React from "react";
import { CreateButton, TodoInput } from "./CreateStyle";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useInput } from "../../../hooks/useInput";
import { createTodoAxios } from "../../../api/todo";
import { dataIdInputPropsType } from "../../../types/inputData";

type PropsType = {
    getTodos: () => Promise<void>
}

const CreateTodo = ({getTodos}:PropsType) => {

    const inputTodoProps: dataIdInputPropsType = {
      "data-testid" : "new-todo-input"
    }


    const [todoValue, todoValueChange] = useInput("");

    const submitTodo = async () => {
        
        if(!todoValue.inputValue){
            alert('할 일을 입력해주세요')
        }
        
        await createTodoAxios(todoValue.inputValue);
        getTodos();
        todoValue.setInputValue("");
    };

    return (
        <Grid container columnSpacing={1} sx={{ alignItems: "center" }}>
            <Grid item xs={11}>
                <TodoInput
                    value={todoValue.inputValue}
                    inputProps={inputTodoProps}
                    onChange={todoValueChange}
                    id="todo"
                    label="하고 싶은 일"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={1}>
                <CreateButton
                    data-testid="new-todo-add-button"
                    onClick={submitTodo}
                >
                    <AddBoxOutlinedIcon color="primary" />
                </CreateButton>
            </Grid>
        </Grid>
    );
};

export default CreateTodo;
