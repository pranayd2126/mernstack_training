import { useForm } from "react-hook-form"

function AddTask({addNewTask, deleteTask}) {
    const {register, handleSubmit, reset} = useForm();

    const onFormSubmit = (obj) => {
        addNewTask(obj);
        reset();
    }
    const onDelete = (obj) => {
        console.log(obj);
        deleteTask(obj.task);
        reset();
    }

  return (
    <div className="bg-white shadow p-4">
        <h3 className="text-blue-400 text-4xl mb-10 p-8">Add Task</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
                <input type="text" {...register("task")} placeholder="aDD NEW tASK" className="border px-1 py-1 mr-1.5" />
                <button type="submit" className="bg-blue-300 text-black px-4 py-3  mb-4 rounded">Add</button>
            </div>
        </form>
        <form onSubmit={handleSubmit(onDelete)}>
            <div>
                <input type="text" {...register("task")} placeholder="aDD NEW tASK" className="border px-1 py-1 mr-1.5" />
                <button type="submit" className="bg-red-300 text-black px-4 py-3  mb-4 rounded">Delete</button>
            </div>
        </form>
    </div>
  )
}

export default AddTask;
