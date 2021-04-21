'use strict';
{
  const addBtn = document.getElementById('add_btn');
  const todos = [];
  

  addBtn.addEventListener('click', () =>{
    const textAdd = document.getElementById('text_add');
    const value = text_add.value;
    const addId = document.getElementById('add_id');
    const addStatus = document.getElementById('add_status');
    const addComment = document.getElementById('add_comment');
    const li = document.createElement('li');
    const idLi = document.createElement('li');
    const div =  document.createElement('div');
    const deleteBtn = document.createElement('a');
    const statusBtn = document.createElement('a');
    todos.push(value);
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('btn');
    statusBtn.textContent = '作業中';
    statusBtn.classList.add('btn');
    li.textContent = value;
    for (let i = 0; i < todos.length; i++) {
      idLi.textContent = `${i}`;
    }
    addId.appendChild(idLi);
    addComment.appendChild(li);
    textAdd.value = '';
    div.appendChild(statusBtn);
    div.appendChild(deleteBtn);
    addStatus.appendChild(div);
    

  });
};