import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTodoAxios } from '../../api/todo'
import { TodoBox, TodoWrap } from './TodoStyle'
import TodoList from '../../components/Todo/TodoList/TodoList'

const Todo = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const toDodata  = await getTodoAxios()
    setTodos(toDodata)
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <TodoWrap>
      <TodoBox>
        <TodoList todos={todos} />
      </TodoBox>
    </TodoWrap>
  )
}

export default Todo