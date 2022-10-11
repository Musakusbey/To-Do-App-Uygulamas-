let addToDoButton=document.getElementById("addToDo");
let toDoContainer=document.getElementById("toDoContainer");
let inputText=document.getElementById("inputText");  
let clearToDo=document.getElementById("clearToDo");
addToDoButton.addEventListener("click", () => {

  let paragraph=document.createElement("p");
  paragraph.classList.add('.paragraph-styling'); 
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML=inputText.value;  
  inputText.value=""; 
  
  paragraph.addEventListener('click',() => {
   
     paragraph.style.textDecoration="line-through";  
     paragraph.style.color="red";
  });

  paragraph.addEventListener('dblclick', () => {
    toDoContainer.removeChild(paragraph);   
  });

  clearToDo.addEventListener('click', () =>{

    paragraph.remove();
  })
}); 

