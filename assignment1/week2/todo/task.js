// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];
 let taskId=0;
// 1. Add new task
function addTask(title, priority, dueDate) {
    
  // Validate using imported functions
   if(!validateTitle(title)&& !validatePriority(priority)&& !validateDueDate(dueDate)){
    return 'Error: Invalid task details';
   }

  // If valid, add to tasks array
  tasks.push({ title, priority, dueDate, completed: false, id: ++taskId });
  return 'Task added successfully';
  // Return success/error message
}

// 2. Get all tasks
function getAllTasks() {
  // Return all tasks
  return tasks;

}

// 3. Mark task as complete
function completeTask(taskId) {
  // Find task and mark as complete
  const task = tasks.find(t => t.id === taskId);
  if(task){
    task.completed = true;
    return 'Task marked as complete';
  }
}

// Export functions
export  { addTask, getAllTasks, completeTask };
