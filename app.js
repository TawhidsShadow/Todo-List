const todoInputEl = document.querySelector('.todo__input')
const todoListEl = document.querySelector('.todo__list')
const todoItemEls = document.querySelectorAll('.todo__item')


function addListItem(){
  todoInputEl.addEventListener('keypress', function(event){
    if(event.key === 'Enter' && todoInputEl.value !== ''){
      let newListItem = createListItem(todoInputEl.value)
      // todoListEl.appendChild(newListItem)
      todoListEl.insertBefore(newListItem, todoListEl.firstChild)
      todoInputEl.value = ''
    }
  })
}
function createListItem(text){
  const newListElement = document.createElement('li')
  newListElement.textContent=text
  newListElement.setAttribute('class', 'todo__item')
  return newListElement
}
function toggleDone(){
  todoListEl.addEventListener('click', function(event){
    if (event.target.classList.contains('todo__item')){
      event.target.classList.toggle('done')
    }
  })
}
// function toggleDone(){
//   for (let elem of todoItemEls) {
//     console.log(elem)
//     elem.addEventListener('click', function(){
//       elem.classList.toggle('done')
//       console.log(elem)
//     })
//   }
// }

toggleDone()
addListItem()