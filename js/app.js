const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Buat array kosong untuk todo list
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todo
function renderTodos() {
  list.innerHTML = '';

  // Render setiap todo dalam list
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center py-4 px-6';
    li.innerHTML = `
      <span class="flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}">${todo.text}</span>
      <button class="ml-4 text-red-500" data-index="${index}">&times;</button>
    `;
    list.appendChild(li);
  });
}

// buat todo baru
function addTodo() {
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
    renderTodos();
  }
}

// hapus todo
function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

// Alihkan todo sebagai selesai (dicoret) atau tidak selesai
function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

// submit todo
form.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

// klik tombol hapus todo
list.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const index = parseInt(event.target.dataset.index);
    removeTodo(index);
  }
});

// klik teks todo untuk selesai / coret todo
list.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    const index = Array.from(list.children).indexOf(event.target.parentElement);
    toggleTodoCompleted(index);
  }
});

// Initial render
renderTodos();
