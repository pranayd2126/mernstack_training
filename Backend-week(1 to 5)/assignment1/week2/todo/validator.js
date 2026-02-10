// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {

  return title!==''&& title.length>=3 ? true : false;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    return priority in ['low','medium','high'] ? true:false ;
  
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
     let today = new Date();
     return date > today ? true : false;
  
}

export  { validateTitle, validatePriority, validateDueDate };