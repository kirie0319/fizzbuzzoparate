'use strict';
{
  const add_btn = document.getElementById('add_btn');
  const todos = [];
  

  add_btn.addEventListener('click', () =>{
    const text_add = document.getElementById('text_add');
    const value = text_add.value;
    const add_id = document.getElementById('add_id');
    const add_status = document.getElementById('add_status');
    const output = document.getElementById('output');
    const add_comment = document.getElementById('add_comment');
    const li = document.createElement('li');
    const id_Li = document.createElement('li');
    const div =  document.createElement('div');
    const delete_btn = document.createElement('a');
    const status_btn = document.createElement('a');
    todos.push(value);
    delete_btn.textContent = '削除';
    delete_btn.classList.add('btn');
    status_btn.textContent = '作業中';
    status_btn.classList.add('btn');
    li.textContent = value;
    for (let i = 0; i < todos.length; i++) {
      id_Li.textContent = `${i}`;
    }
    add_id.appendChild(id_Li);
    add_comment.appendChild(li);
    text_add.value = '';
    div.appendChild(status_btn);
    div.appendChild(delete_btn);
    add_status.appendChild(div);
    

  });
  
  

  
}