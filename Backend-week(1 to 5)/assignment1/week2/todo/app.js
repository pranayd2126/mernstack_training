// TODO: Import task functions
// import { ... } from './task.js';
// Test your module system
// 1. Add some tasks
// 2. Display all tasks
// 3. Complete a task
// 4. Display all tasks again
import { addTask, getAllTasks, completeTask } from './task.js';

// ADD some tasks
addTask(    'Buy groceries', 'medium', new Date('2024-07-10'));
addTask(    'Finish project report', 'high', new Date('2024-07-05'));
addTask(    'Call plumber', 'low', new Date('2024-07-15'));

// DISPLAY all tasks
console.log('all tasks:',getAllTasks());

//complete a tasts
completeTask(2);
// DISPLAY all tasks again
console.log('all tasks after completing task 2:',getAllTasks());
