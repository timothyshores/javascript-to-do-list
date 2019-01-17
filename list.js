// Avoid 
window.setTimeout(function() {
    var todos = ['Add more to do items'];
    
    var input = prompt("What would you like to do?");
    
    while (input != 'quit') {
        if (input == 'list') {
            console.log(todos);
        } else if (input == 'new') {
            var newTodo = prompt("Add a new to do item");
            todos.push(newTodo);
            // console.log(todos);
        }
        input = prompt("What would you like to do?");
    }
    console.log('Quitting the Javascript To Do App');

}, 500);