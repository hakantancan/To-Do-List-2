let addBtn=document.getElementById("addButon");
let inputField=document.getElementById("inputField");
let todoContainer=document.getElementById("todoContainer");

addBtn.addEventListener("click",ekle)




function ekle(){
 var paragraf =document.createElement("li");
 paragraf.textContent=inputField.value;
 todoContainer.appendChild(paragraf);

}