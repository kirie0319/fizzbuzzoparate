'use strict';
{
  const todos = [];
  const textAdd = document.getElementById('text_add');
  const task = {
    content: '',
    status: ''
  };

  const addBtn = document.getElementById('add_btn');
  const add = document.getElementById('add');

  const overall = document.getElementById('all');
  const workon = document.getElementById('workon');
  const done = document.getElementById('done');

  function addTask() {
    const content = textAdd.value;
    task.content = content;
    todos.push({
      content,
      status: '作業中'
    })
    textAdd.value = ''
  }

  function displayTask(todos) {
    add.innerHTML = '';
    todos.forEach((todo, index) => {
      //IDを添付する処理
      const tr =  document.createElement('tr');
      const idTd = document.createElement('td');
      const td = document.createElement('td');
      for (let i = 0; i < todos.length; i++) {
        document.getElementsByTagName(tr);
        idTd.textContent = index;
      }
      //タスクの内容を添付する処理
      td.textContent = todo.content
      tr.innerHTML = '';
      //HTML部に表示する処理
      tr.appendChild(idTd);
      tr.appendChild(td);
      tr.classList.add('focus');
      if (todo.status === '完了') {
        tr.classList.remove('focus');
        tr.classList.add('complete');
      }
      //タスクボタンに状態を添付する処理
      createStatus(todo, tr)
      //削除ボタンに削除と添付する処理
      createDelete(tr, index)
      add.appendChild(tr);
    })
  }

  function createStatus(todo, tr) {
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('btn');
    statusBtn.textContent = todo.status;
    tr.appendChild(statusBtn);
    changeStatus(statusBtn, todo, tr);
  }

  function changeStatus(statusBtn, todo, tr) {
    statusBtn.addEventListener('click', () => {
      if (todo.status === '作業中') {
        todo.status = '完了';
        statusBtn.textContent = todo.status;
        tr.classList.add('complete');
        tr.classList.remove('focus');
        if (workon.checked) {
          tr.classList.add('unviewed');
        }
      } else {
        todo.status = '作業中'
        statusBtn.textContent = todo.status;
        tr.classList.remove('complete');
        tr.classList.add('focus');
        if (done.checked) {
          tr.classList.add('unviewed');
        }
      }
    });
  }

  function createDelete(tr, index) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.textContent = '削除';
    tr.appendChild(deleteBtn);
    deleteTask(deleteBtn, tr, index);
  }

  function deleteTask(deleteBtn, tr, index) {
    deleteBtn.addEventListener('click', () =>{
      add.removeChild(tr);
      todos.splice(index, 1);
      displayTask(todos);
      checked(todos);
    });
  }

  addBtn.addEventListener('click', () =>{
    addTask();
    displayTask(todos);
    checked(todos);
  });

  overall.addEventListener('click', () => {
    const completes = document.querySelectorAll('.complete');
    completes.forEach((complete) => {
      if (todos.status !== '作業中') {
        complete.classList.remove('unviewed');
      }
    });
    const focuses = document.querySelectorAll('.focus');
    focuses.forEach((focus) => {
      if (todos.status !== '完了') {
        focus.classList.remove('unviewed');
      }
    });
  });

  workon.addEventListener('click', () => {
    const completes = document.querySelectorAll('.complete');
    completes.forEach((complete) => {
      if (todos.status !== '作業中') {
        complete.classList.add('unviewed');
      }
    });
    const focuses = document.querySelectorAll('.focus');
    focuses.forEach((focus) => {
      if (todos.status !== '完了') {
        focus.classList.remove('unviewed');
      }
    });
  });

  done.addEventListener('click', () => {
    const focuses = document.querySelectorAll('.focus');
    focuses.forEach((focus) => {
      if (todos.status !== '完了') {
        focus.classList.add('unviewed');
      }
    });
    const completes = document.querySelectorAll('.complete');
    completes.forEach((complete) => {
      if (todos.status !== '作業中') {
        complete.classList.remove('unviewed');
      }
    });
  });
};

function checked(todos) {
  if (workon.checked) {
    const completes = document.querySelectorAll('.complete');
    completes.forEach((complete) => {
      if (todos.status !== '作業中') {
        complete.classList.add('unviewed');
      }
    });
  }
  if (done.checked) {
    const focuses = document.querySelectorAll('.focus');
    focuses.forEach((focus) => {
      if (todos.status !== '完了') {
        focus.classList.add('unviewed');
      }
    });
  }
}