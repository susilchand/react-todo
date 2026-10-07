import { BadgeCheck, Trash2 } from "lucide-react";
type Todos = {
    item:{
    id: number;
    text: string;
    completed: boolean;

};
completeTodo: (id: number)=>void;
deleteTodo: (id:number)=>void;
}
const Todo = ({item,completeTodo,deleteTodo}:Todos) => {
  return (
    <>
        <div key={item.id} className="flex items-center justify-between p-4 mt-2 rounded-xl border"
                                >
                                    <div className="flex items-center gap-2 ">
                                        <p className={`${item.completed ? "line-through": ""}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={() => completeTodo(item.id)} className={`shrink-0 ${item.completed ? "text-green-500" : "text-gray-400 hover:text-green-500"}`}><BadgeCheck size={20} /></button>

                                        <button onClick={() => deleteTodo(item.id)
                                        } className="hover:bg-red-300 p-1 rounded-lg">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>

                                </div>
    </>
  )
}

export default Todo