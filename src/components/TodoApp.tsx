import { Plus } from "lucide-react";
import Todo from "./Todo";
import { useState } from "react";
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};
const TodoApp = () => {
    const [todo, setTodo] = useState<string>("");

    const [todos, setTodos] = useState<Todo[]>([])
    const addTodo = () => {
        if (!todo.trim()) return;
        const newTodo = { id: Date.now(), text: todo, completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setTodo("");

    }
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id));
    };
    const completeTodo = (id: number) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
    }
    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTodo();

        }
    }
    return (
        <>
            <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-purple-950">
                <div className="w-full max-w-xl bg-slate-900 p-4 text-white">
                    <div>
                        <div className="px-6 py-8 text-center">
                            <h1 className="text-3xl font-bold">Todo For the day</h1>

                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex gap-2">
                            <input type="text"
                                placeholder="What needs to be done?"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                onKeyDown={handleEnterKey}
                            />
                            <button onClick={addTodo} className="flex items-center gap-1 bg-fuchsia-950 text-white px-4 py-3 rounded-xl hover:bg-purple-800">
                                <Plus size={20} />
                                Add Task
                            </button>
                        </div>
                        <div className="flex justify-center items-center mt-1">
                            <h2 className="text-lg font-semibold text-gray-400">Todos</h2>

                        </div>

                        {todos.length === 0 ? (
                            <div className="text-center py-1 text-gray-400">

                                <p className="text-sm mt-1">You have completed all your tasks!</p>
                            </div>
                        ) : (
                            todos.map((item) => {
                                return <Todo key={item.id} item={item} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                            }
                            ))
                        }


                    </div>
                </div>
            </main>
        </>
    )
}

export default TodoApp