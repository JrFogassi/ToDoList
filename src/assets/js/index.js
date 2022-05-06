//armazena as tasks, funciona como armazenamento
let dataTask = [
    {newTask: "Malhar", taskStatus: ""},  
    {newTask: "Estudar", taskStatus:""}
    ];

    // adiciona uma task ao html, a tela
const addTask = (newTask, taskStatus) => {
    const task = document.createElement('label');
    task.classList.add ('todo-tasks');
    task.innerHTML = `<span></span> <input type=checkbox ${taskStatus}> <div>${newTask}</div> `;

    document.getElementById("tasks-list").appendChild(task);
}


//remove a ultima task criada quando a tela é atualizada
const clearTaskField = () => {
    const tasksList = document.getElementById("tasks-list");
    while (tasksList.firstChild){
        tasksList.removeChild(tasksList.lastChild);
    }
}

//atualiza o campo de tasks
const refreshTasksField = () => {
    clearTaskField();
    dataTask.forEach (task => addTask (task.newTask, task.taskStatus));
}

//cria a task ao clicar enter
const createTask = (event) => {
    const create = event.key;
    const taskBox = event.target.value;
    if (create === "Enter"){
        dataTask.push({newTask: taskBox, taskStatus:""});
        refreshTasksField();

        //apaga o campo de texto
        event.target.value = "";
    } 
}

document.getElementById("add-task").addEventListener("keypress", createTask);

refreshTasksField();



//createElement para criar um campo no HTML, como um label
//classList.add vai criar uma classe para o elemento selecionado
//innerHTML vai incluir elementos no HTML
//getElementById.appendChild vai selecionar um Id no HTML e o apChild vai criar um filho para tal Id