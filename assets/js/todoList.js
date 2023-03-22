/* Membuat sebuah aplikasi todoList dengan javaScript DOM */
// harus ada fitur berikut
// 1. menampilkan nilai di html dengan menggunakan append
// 2. mencoret
// 3. menghapus
let todos = {}; // Perantara untuk local Storage
const storageTodo = "storageTodo";
const todoBox = document.getElementById("todo");
// mengambil API
let apiUrl = "https://crudcrud.com/api/d855959089d640a49b55e62838257f63/TodosRizkyA";

/* ==================================================== 
   ========== L O C A L == S T O R A G E ==============
   ==================================================== */
// mengecek jika localStorage API bisa atau tidak
if (typeof Storage !== "undefined") {
  console.log("Available!");
} else {
  console.log("Not Available!");
}

// Read LocalStorage
if ((todoLocal = localStorage.getItem(storageTodo))) {
  todos = JSON.parse(todoLocal);

  // Loop isi objek todos atau bikin listnya
  for (let key in todos) {
    createList(key, todos[key]);
  }
}

function syncLocalStorage(activity, item, status = false) {
  switch (activity) {
    case "ADD":
    case "UPDATE":
      todos[item] = status;
      break;
    case "DELETE":
      delete todos[item];
      break;
    default:
      break;
  }

  /* console.log(todos) */

  localStorage.setItem(storageTodo, JSON.stringify(todos));
  return;
}

/* ==================================================== 
   ========== T O D O == F U N C T I O N ==============
   ==================================================== */
   function add() {
    // mengambil nilai dari teks
    let newTeks = document.getElementById("newText").value ;
    createList(newTeks);
  
    // membuat syn untuk local storage
    syncLocalStorage("ADD", newTeks);
  
    // kemudian mengosongkan field
    newTeks = "";

    // membuat syn untuk API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTeks,
        done: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))

}

function createList(teks, status = false) {
    let isDone = (status) ? 'done' : '';
  // membuat list baru dengan createElement
  let todoNew = `<div class='alert alert-success item'>
  <i class='fa-solid fa-circle-xmark' onclick='hapus(this)'></i>
  <span class='text ${isDone}'> ${teks} </span>
  <i class='fa-solid fa-pencil'  onclick='toggle(this)'></i>
  </div>`;

  todoBox.insertAdjacentHTML("afterbegin", todoNew);
}

function toggle(el) {
  let textElem = el.parentElement.querySelector(".text");
  if (textElem) {
    let status = textElem.classList.toggle("done");
    syncLocalStorage("UPDATE", textElem.innerText.trim(), status);
  }
}

function hapus(el) {
  el.parentElement.remove();
  syncLocalStorage("DELETE",el.parentElement.querySelector(".text").innerText.trim());
}
