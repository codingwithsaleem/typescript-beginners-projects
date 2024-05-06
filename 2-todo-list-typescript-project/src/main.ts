import inquirer from "inquirer";


interface Todo{

    id: number;
    task: string;
    completed: boolean;
    unCompleted: boolean;

}

class TodoList{

    private todos: Todo[]= [];
    private currentId: number = 1;

    addTode(task: string): void{
        const newTodo: Todo = {
            id: this.currentId,
            task,
            completed: false,
            unCompleted: true
        };
        this.todos.push(newTodo);
        this.currentId++;
    }

    showTodos(): void{
        console.log(this.todos);
    }

    showUncompletedTodos(): void{
        const uncompletedTodos = this.todos.filter(todo => todo.unCompleted);
        console.log(uncompletedTodos);
    }

    showCompletedTodos(): void{
        const completedTodos = this.todos.filter(todo => todo.completed);
        console.log(completedTodos);
    }

    completeTodoById(id: number): void{
        const todo = this.todos.find(todo => todo.id === id);
        if(todo){
            todo.completed = true;
            todo.unCompleted = false;
        }
    }

    unCompleteTodoById(id: number): void{
        const todo = this.todos.find(todo => todo.id === id);
        if(todo){
            todo.completed = false;
            todo.unCompleted = true;
        }
    }

    deleteTodoById(id: number): void{
        this.todos = this.todos.filter(todo => todo.id !== id);
    }


}



const todoList = new TodoList();

async function main(){
    const answer = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What do you want to do?",
        choices: [
            "Add a todo",
            "Show all todos",
            "Show uncompleted todos",
            "Show completed todos",
            "Complete a todo",
            "Uncomplete a todo",
            "Delete a todo",
            "Exit"
        ]
    });


   async function addTodo(){
     
    const answer = await inquirer.prompt({
        type: "input",
        name: "task",
        message: "What task do you want to add?"
    });

    todoList.addTode(answer.task);
    console.log("Task added successfully");
    main();
   }

    async function completeTodo(){
         const answer = await inquirer.prompt({
              type: "input",
              name: "id",
              message: "What is the id of the todo you want to complete?"
         });

        
         todoList.completeTodoById(parseInt(answer.id));
         console.log("Todo completed successfully");
         main();
    }

    async function unCompleteTodo(){
        const answer = await inquirer.prompt({
             type: "input",
             name: "id",
             message: "What is the id of the todo you want to uncomplete?"
        });
   
        todoList.unCompleteTodoById(parseInt(answer.id));
        console.log("Todo uncompleted successfully");
        main();
    }
    
    async function deleteTodo(){
        const answer = await inquirer.prompt({
             type: "input",
             name: "id",
             message: "What is the id of the todo you want to delete?"
        });
   
        todoList.deleteTodoById(parseInt(answer.id));
        console.log("Todo deleted successfully");
        main();
    }

    async function showTodos(){
        todoList.showTodos();
        main();
    }

    async function showUncompletedTodos(){
        todoList.showUncompletedTodos();
        main();
    }

    async function showCompletedTodos(){
        todoList.showCompletedTodos();
        main();
    }

    

    switch(answer.choice){
        case "Add a todo":
            addTodo();
            break;
        case "Show all todos":
            showTodos();
            break;
        case "Show uncompleted todos":
            showUncompletedTodos();
            break;
        case "Show completed todos":
            showCompletedTodos();
            break;
        case "Complete a todo":
            completeTodo();
            break;
        case "Uncomplete a todo":
            unCompleteTodo();
            break;
        case "Delete a todo":
            deleteTodo();
            break;
        case "Exit":
            console.log("Goodbye!");
            break;
    }


}


main();