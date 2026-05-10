// Simple JavaScript Todo List

let todos = [];

// Add a todo
function addTodo(task) {
    todos.push(task);
    console.log(`Added: ${task}`);
}

// Remove a todo
function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
        console.log(`Removed: ${todos[index]}`);
        todos.splice(index, 1);
    } else {
        console.log("Invalid index");
    }
}

// Show all todos
function showTodos() {
    console.log("Todo List:");
    
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

// Example usage
addTodo("Learn JavaScript");
addTodo("Build a project");

showTodos();

removeTodo(0);

showTodos();