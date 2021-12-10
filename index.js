function getTodoListItem(){
  let item = document.getElementsByClassName("todo-input")[0].value;
  document.getElementsByClassName("todo-input")[0].value = "";
  let template = document.getElementById("display-item-template");
  let clone = template.content.cloneNode(true);
  let displayItemText = clone.querySelectorAll(".display-item-text");
  displayItemText[0].innerHTML = item;
  document.getElementById("display-item").appendChild(clone);
}

function removeTodoListItem(elem){
  let doneItem = elem.parentNode.querySelectorAll(".display-item-text")[0].innerHTML;
  let template = document.getElementById("display-done-item-template");
  let clone = template.content.cloneNode(true);
  let displayDoneItemText = clone.querySelectorAll(".display-done-item-text");
  displayDoneItemText[0].innerHTML = doneItem;
  document.getElementById("display-done-item").appendChild(clone);
  elem.parentNode.parentNode.remove();
}
