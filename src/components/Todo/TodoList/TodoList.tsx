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
};

const TodoList = ({ todos }: PropsType) => {
    return (
        <TodoListWrap>
            {todos.map((item) => (
                <TodoContent key={item.id} item={item} />
            ))}
        </TodoListWrap>
    );
};

export default TodoList;
