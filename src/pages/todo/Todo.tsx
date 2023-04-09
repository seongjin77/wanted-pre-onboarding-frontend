import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTodoAxios } from "../../api/todo";
import { TodoBox, TodoWrap } from "./TodoStyle";
import TodoList from "../../components/Todo/TodoList/TodoList";
import CreateTodo from "../../components/Todo/createTodo/CreateTodo";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const toDodata = await getTodoAxios();
        setTodos(toDodata);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <TodoWrap>
            <TodoBox>
                <CreateTodo getTodos={getTodos} />
                <TodoList todos={todos} />
            </TodoBox>
        </TodoWrap>
    );
};

export default Todo;
