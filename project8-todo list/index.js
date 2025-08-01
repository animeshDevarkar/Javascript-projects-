const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        alert("You Need To Write Something In The Input Box");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value  + '<span>×</span>';
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()

inputBox.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });


