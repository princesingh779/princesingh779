const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// it take input and add it into the list 
function addtask() {
    if (inputBox.value === '') {
        alert("You must write something ");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = " ";
    saveData();
}
// onclick Add the event or remove the event 
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

 // Store the data in localStorage as Parmanent 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// to display the stored Data 
function showTask() {
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask();