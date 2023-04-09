import TodoContent from "../todoContent/TodoContent";
import { TodoListWrap } from "./TodoListStyle";

export type Todo = {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
};

type PropsType = {
  todos: Todo[];
  getTodos: () => Promise<void>;
}

const TodoList = ({ todos,getTodos }: PropsType) => {
    return (
        <TodoListWrap>
            {todos.map((item) => (
                <TodoContent getTodos={getTodos} key={item.id} item={item} />
            ))}
        </TodoListWrap>
    );
};

export default TodoList;
