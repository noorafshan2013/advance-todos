#!/bin/usr/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let condition = true;

console.log("Welcome to TODO-List app");

let main = async () => {
  while (condition) {
    let options = await inquirer.prompt([
      {
        name: "tasks",
        type: "list",
        message: "select an option",
        choices: [
          "Add Task",
          "Update Task",
          "View List",
          "Delete Task",
          "Exit",
        ],
      },
    ]);
    if (options.tasks === "Add Task") {
      await addTask();
    } else if (options.tasks === "Update Task") {
      await updateTask();
    } else if (options.tasks === "View List") {
      await viewTask();
    } else if (options.tasks === "Delete Task") {
      await deleteTask();
    }
    else if (options.tasks === "Exit" ) {
        condition = false;
  }
};
}

let addTask = async () => {
  let addNew = await inquirer.prompt([
    {
      name: "new",
      type: "input",
      message: "Enter new task you want to added",
    },
  ]);
  todos.push(addNew.new);
  console.log(` ${addNew.new}  Task added successfully to your list  `);
};

let viewTask = () => {
  console.log(" Your Todo List");
  todos.forEach((addNew, index) => {
    console.log(`${index + 1}:  ${addNew} `);
  });
};

let deleteTask = async () => {
  await viewTask();
  let indexDelete: any = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the index no you want to delete task from Todo list",
    },
  ]);
  let deleteTask = todos.splice(indexDelete.index -1, 1);
  console.log(`${deleteTask}  Task deleted successfully`);
};
let updateTask = async () => {
    await viewTask();
    let update = await inquirer.prompt([
        {
         name: "index",
         type: "number",
         message: "Enter the index no you want to update in your Todo list"   
        },
        {
            name: "newTask",
            type: "input",
            message: "Enter the new task"
        }
    ]);
todos[update.index - 1] = update.newTask
console.log(`${update.index - 1}   ` )

}; 

main();
