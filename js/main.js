//define new input "toDO"
const toDo = document.getElementById('newToDo')

//define span class of "clearTask"
const clearTask = document.getElementsByClassName('clearTask')

const tasks = []

//event listener that waits for enter key and adds new task
toDo.addEventListener('keydown', function(event){
    if(event.code === 'Enter' || event.code === 'Return'){
        addNewTask(toDo.value)
    }
})

//event listener that removes a task
// clearTask.addEventListener('click', removeFromList)

function addNewTask(text){
    //create a new task object
    const task = {
        text: text,
        element: createTaskElement(text)
    }

    //add task to tasks array
    tasks.push(task)

    //reset input text
    toDo.value = '';
}

//function for creating HTML elements for task
function createTaskElement(text){
    //define various elements used to add task
    const newTask = document.getElementById('newTask')
    const removeButton = document.getElementById('removeTask')
    const toDoList = document.getElementById('toDoList')
    //change text based off of input
    newTask.innerText = text;
    //add remove 'x' 
    removeButton.innerText = 'x'
    //remove id attributes
    newTask.removeAttribute('id')
    removeButton.removeAttribute('id')
    toDoList.removeAttribute('id')

    //add new line for next task
    toDoList.innerHTML += '<div id="toDoList"><h4 id="newTask"></h4><span id="removeTask" class="clearTask"></span></div'
}

//function for removing a task
// function removeFromList(){

// }