const input = document.getElementById('todo');
const btnAdd = document.getElementById('btnAdd');
const tasks = document.getElementById('list');

/* Local Storage */
let storedTasks = JSON.parse(localStorage.getItem('tasks'));

if (storedTasks) {
    tasks.innerHTML = storedTasks;
}

//add new task
btnAdd.addEventListener('click', () => {
    if (input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = "";
        localStorage.setItem('tasks', JSON.stringify(tasks.innerHTML));
    }
    else{
        alert('Isi list kegiatan')
    }
})

//remove item
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
        localStorage.setItem('tasks', JSON.stringify(tasks.innerHTML));
    }
})
