function TasksList({tasks}) {
  return (
    <div className="bg-white shadow:lg p-8">
      <h3 className="text-3xl text-blue-400 mb-6 P-8">List of Tasks</h3>
        {
            tasks.length == 0 ?
            <p className="text-2xl">Empty </p> :
            tasks.map((m, i) => <p key={i} className="text-1xl">{m.task}</p>)
        }
    </div>
  )
}

export default TasksList

