'use strict';
{
  const todos = [];
  const textAdd = document.getElementById('text_add');
  const task = {
    content: '',
    status: '作業中'
  };

  const addBtn = document.getElementById('add_btn');
  const add = document.getElementById('add');

  function addTask() {
    const content = textAdd.value;
    task.content = content
    todos.push({
      content: content,
      status: '作業中'
    })
    textAdd.value = ''
  }

  function displayTask(todos) {
    add.innerHTML = '';
    todos.forEach((task, index) => {
      //IDを添付する処理
      const tr =  document.createElement('tr');
      const idTd = document.createElement('td');
      const td = document.createElement('td');
      for (let i = 0; i < todos.length; i++) {
        document.getElementsByTagName(tr);
        idTd.textContent = index;
      }
      //タスクの内容を添付する処理
      td.textContent = task.content
      tr.innerHTML = '';
      //HTML部に表示する処理
      tr.appendChild(idTd);
      tr.appendChild(td);
      //タスクボタンに状態を添付する処理
      createStatus(task, tr)
      //削除ボタンに削除と添付する処理
      createDelete(tr,  index)
      add.appendChild(tr);
    })
  }

  function createStatus(task, tr) {
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('btn');
    statusBtn.textContent = task.status;
    tr.appendChild(statusBtn);
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
    });
  }

  addBtn.addEventListener('click', () =>{
    addTask();
    displayTask(todos);
  });
};