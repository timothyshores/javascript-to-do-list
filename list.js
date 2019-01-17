// Avoid 
window.setTimeout(function() {
    var todos = ['Add more to do items'];
    
    var input = prompt("What would you like to do?");
    
    while (input != 'quit') {
        if (input == 'list') {
            listTodos();
        } else if (input == 'new') {
            addToDo();
        } else if (input == 'delete') {
            deleteToDo();
        }
        input = prompt("What would you like to do?");
    }
    console.log('Quitting the Javascript To Do App');
    console.log(' ');


    function listTodos() {
        console.log('**********');
            todos.forEach(function(todo, index){
                console.log(index +": " + todo);
            });
            console.log('***********');
            console.log(' ');
    }

    function addToDo() {
        var newTodo = prompt("Add a new to do item");
        todos.push(newTodo);
    }

    function deleteToDo() {
        var index = prompt("Enter the index of the todo to delete");
        todos.splice(index, 1);
        console.log('Item deleted');
        console.log(' ');

    }

}, 500);