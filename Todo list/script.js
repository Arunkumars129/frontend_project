let input = document.getElementById("input");
let addList = document.getElementById("btn");
let todoTask = document.getElementById("task");

let taskArray = [];

window.onload = ()=>{
    taskArray = JSON.parse(localStorage.getItem("taskArray"))||[];
    taskArray.forEach(todo => {
        todoList(todo)
    });
}

addList.addEventListener("click",()=>{
    if(input.value == ''){
        alert("Add the task")
    }else{
    taskArray.push(input.value);
    todoList(input.value);
    localStorage.setItem("taskArray",JSON.stringify(taskArray));
    input.value = ''
    }   
});

function todoList(todo){
    let task = document.createElement("li")
    task.innerHTML = ` <input type="checkbox" class="checkbox">
    <span class="text">${todo}</span>
    <button class="deleteBtn">Delete</button>`;
    todoTask.appendChild(task);

    task.querySelector(".deleteBtn").addEventListener("click",()=>{
        task.remove();
        taskArray = taskArray.filter(item => item !== todo);
        localStorage.setItem("taskArray",JSON.stringify(taskArray));
        
    })
    task.querySelector(".checkbox").addEventListener("change",()=>{
        task.classList.toggle("finished")
    })
    
}

    
