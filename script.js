function openFeatures() {
    var allElems = document.querySelectorAll(".elem");
    var fullElemPage = document.querySelectorAll(".fullElem");
    var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

    allElems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            fullElemPage[elem.id].style.display = "block";
        });
    });

    fullElemPageBackBtn.forEach(function (back) {
        back.addEventListener("click", function () {
            fullElemPage[back.id].style.display = "none";
        });
    });
}

openFeatures();

function todoList() {
    let currTask = [];

    if (localStorage.getItem("currTask")) {
        currTask = JSON.parse(localStorage.getItem("currTask"));
    } else {
        console.log("Task list is empty");
    }

    function renderTask() {
        let allTask = document.querySelector(".allTask");

        let sum = "";

        currTask.forEach(function (elem, idx) {
            sum =
                sum +
                `<div class="task">
            <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
            <button id=${idx}>Mark as Completed</button>
            </div>`;
        });

        allTask.innerHTML = sum;

        localStorage.setItem("currTask", JSON.stringify(currTask));

        document.querySelectorAll(".task button").forEach(function (btn) {
        btn.addEventListener("click", function () {
            currTask.splice(btn.id, 1);
            renderTask();

            });
        });
    }

    renderTask();

    let form = document.querySelector(".addTask form");
    let taskInput = document.querySelector(".addTask form #task-input");
    let taskDetailsInput = document.querySelector(".addTask form textarea");
    let taskCheckBox = document.querySelector(".addTask form #check");


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        currTask.push({
            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckBox.checked,
        });
        renderTask();


        taskCheckBox.checked = false;
        taskInput.value = ""
        taskDetailsInput.value = ""
    });


}

todoList();


function dailyPlanner() 
{
    let dayPlanner = document.querySelector(".day-planner");

    let hours = Array.from({length:18}, (elem, idx) =>`${6+idx}:00 - ${7+idx}:00`
    )
    var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData"))|| {}

    let wholeDaySum = ""


    hours.forEach(function(elem, idx) 
    {  
        var saveData = dayPlanData[idx] || "" ; 

        wholeDaySum = wholeDaySum + `<div class="day-planner-time">
                        <p>${elem}</p>
                        <input id=${idx} type="text" placeholder="..." value=${saveData}>
                    </div>`
    })

    dayPlanner.innerHTML = wholeDaySum;

    let dayPlannerinput = document.querySelectorAll(".day-planner input")

    dayPlannerinput.forEach(function(elem){
        elem.addEventListener("input", function() {
            console.log("HHHHEEELLOO")
            dayPlanData[elem.id] = elem.value;

            localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner();