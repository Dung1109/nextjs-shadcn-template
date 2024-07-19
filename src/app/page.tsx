import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h2>Todo App</h2>
            <AddTodo />
            <TodoList />
        </div>
    );
}
