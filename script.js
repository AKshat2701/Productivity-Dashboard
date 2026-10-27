function openFeatures()
{
    var allElems = document.querySelectorAll(".elem")
    var fullElemPage = document.querySelectorAll(".fullElem")
    var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back")

    allElems.forEach(function(elem) {
        elem.addEventListener("click", function() {
            fullElemPage[elem.id].style.display = "block";
        })
    })

    fullElemPageBackBtn.forEach(function(back) {
        back.addEventListener("click", function() {
            fullElemPage[back.id].style.display = "none";
        })
    })
}



let form = document.querySelector(".addTask form")
let taskInput = document.querySelector(".addTask form #task-input")
let taskDetailsInput = document.querySelector(".addTask form textarea")
let taskCheckBox = document.querySelector(".addTask form #check")
let currTask = [
    {
        task: "Mandir Jao",
        details: "Human ji ke mandir jao",
        imp: true 
    },
    {
        task: "Recording Karo",
        details: "Cohort ke liye",
        imp: true
    },
    {
        task: "Lunch at 2 PM",
        details: "Bhook lagi hai",
        imp: false
    }
]


function renderTask() 
{
    var allTask = document.querySelector(".allTask")
    
    var sum = ""
    
    currTask.forEach(function(elem) {
        sum = sum + `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button>Mark as Completed</button>
        </div>`
    })
    
    
    allTask.innerHTML = sum ; 
}


form.addEventListener("submit", function(e)
{
    e.preventDefault();
    currTask.push(
        {
            task:taskInput.value, details:taskDetailsInput.value, 
            imp:taskCheckBox.checked
        }   
    )
    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckBox.checked = false;
    renderTask();
})


renderTask();
