var formEl  = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; //the input is from the html, use the [] for selecting "name" of input from html.
    //the .value (see notes below)
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    
    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};



var createTaskEl = function(taskDataObj) {
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);


// buttonEl.addEventListener("click", function() {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// });

// console.dir(taskNameInput); //the console.dir lets us see more info re what users input (value)
