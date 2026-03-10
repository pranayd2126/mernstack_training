function TasksCont({tasks}) {
    // console.log(tasks);
  return (
    <div className="bg-white shadow p-4">
      <h3 className="text-blue-400 text-3xl mb-8 p-8">Tasks Count</h3>
      <p className="text-2xl">{tasks.length}</p>
    </div>
  )
}

export default TasksCont

