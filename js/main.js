//define new input "toDO"
const toDo = document.getElementById('newToDo')

//define span class of "clearTask"
const removeTask = document.getElementById('removeTask')

//define nightmode button
const nightmode = document.getElementById('moon')

//create an array to store tasks
const tasks = []

//event listener that waits for enter key and adds new task
toDo.addEventListener('keydown', function(event){
    if(event.code === 'Enter' || event.code === 'Return'){
        addNewTask(toDo.value)
    }
})

//event listener that removes a task
removeTask.addEventListener('click', strikeout)

//event listener that switches to night mode
nightmode.addEventListener('click', nightMode)

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
    // const toDoBig = document.getElementById('toDoBig')
    const toDoMedium = document.getElementById('toDoMedium')
    const toDoSmall = document.getElementById('toDoSmall')
    //change text based off of input
    newTask.innerText = text;
    //add remove 'x' 
    removeButton.innerText = ' x'
    //remove id attributes
    newTask.removeAttribute('id')
    removeButton.removeAttribute('id')
    // toDoList.removeAttribute('class')


    //add new line for next task
        if (tasks.length < 3){
            
             toDoMedium.innerHTML += '<div class="line"><h4 id="newTask"></h4><span id="removeTask" class="clearTask"></span></div>'
             
        }else if (tasks.length < 8){
            
            toDoSmall.innerHTML += '<div class="line"><h4 id="newTask"></h4><span id="removeTask" class="clearTask"></span></div>'
        }else{
            toDo.remove();
        }
    
   
}

//function for striking out a task
function strikeout(){
    // const element = document.querySelector
    alert('youdidit!')
}

function nightMode(){
    const element = document.querySelector('body');
    const computedStyles = window.getComputedStyle(element);
    const backgroundColor = computedStyles.backgroundColor;

    if (backgroundColor === 'rgb(234, 226, 183)'){
        element.style.backgroundColor = '#003049';
        element.style.color = '#eae2b7';
    } else if (backgroundColor === 'rgb(0, 48, 73)'){
        element.style.backgroundColor = '#eae2b7';
        element.style.color = '#003049';
    } 
}