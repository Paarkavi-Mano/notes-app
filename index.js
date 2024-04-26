let notesContainerElement = document.getElementById("notesContainer")
let notes=document.querySelectorAll(".input-box");



function createNotes(){
    let inputBox = document.createElement("p");
    let image = document.createElement("img");

    
    inputBox.className="input-box";

    inputBox.setAttribute("contenteditable", "true");
    image.src="delete button.png";
    
    
    
    notesContainerElement.appendChild(inputBox).appendChild(image);
    

} 

notesContainerElement.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
  }
  
})