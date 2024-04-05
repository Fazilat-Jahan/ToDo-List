#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let condition = true;
async function createTodo(task) {
    let name = await inquirer.prompt({
        name: "user",
        type: "input",
        message: "Please enter your name",
    });
    console.log(`\n Hi ${name.user}! Welcome To Your To-Do List \n`);
    while (condition) {
        let option = await inquirer.prompt({
            name: "listing",
            type: "list",
            message: " Select your Operations",
            choices: ["Add List", "Update List", "Delete List", "Check List", "Exit"]
        });
        if (option.listing == "Add List") {
            let add = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "what do you want to add in your todos list",
            });
            todosList.push(add.todo);
            console.log("Your ToDo List is:\n");
            todosList.map((item) => console.log(item));
        }
        if (option.listing == "Update List") {
            let update = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "update item in the list",
                choices: todosList.map(item => item)
            });
            let add = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "what do you want to add in your todos list",
            });
            let newTodo = todosList.filter(val => val !== update.todo);
            todosList = [...newTodo, add.todo];
            console.log("Your ToDo List is:\n");
            todosList.map((item) => console.log(item));
        }
        ;
        if (option.listing == "Delete List") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "delete item in the list",
                choices: todosList.map(item => item)
            });
            let newTodo = todosList.filter(val => val !== deleteTodo.todo);
            todosList = [...newTodo];
            console.log("Your ToDo List is:\n");
            todosList.map((item) => console.log(item));
        }
        if (option.listing == "Check List") {
            console.log("Your ToDo List is:\n");
            todosList.map((item) => console.log(item));
        }
        if (option.listing == "Exit") {
            condition = false;
        }
    }
}
createTodo(todosList);
