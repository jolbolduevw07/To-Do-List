const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const btn = document.getElementById("button")

btn.addEventListener("click", () => {
    const inputValue = inputBox.value.trim(); // Новая переменная для значения
    if (inputValue.value === "") {
        alert("Напишите что нибудь")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
})

listContainer.addEventListener("click", (event) => {
    const target = event.target; 

    if (target.tagName === 'LI') {
        target.classList.toggle("checked");
        saveData();
    } else if (target.tagName === "SPAN") {
        target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()