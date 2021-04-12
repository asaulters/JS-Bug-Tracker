// Vars
let bugName= document.querySelector('#inputName')
let description = document.querySelector("#inputDescription");
let severity = document.querySelector("#inputSeverity");
let responsible = document.querySelector("#inputAssigned");
let addBtn = document.querySelector('.addBtn');
let buglogSort = document.querySelector('#bugLogSort');
let bugLog = document.querySelector('.bugLogLog');
let bugLogArray = [];
let bugItem;



function Bug(bugName, description, severity, responsible, status){
        this.bugName = bugName;
        this.description = description;     
        this.severity = severity;
        this.responsible = responsible;
        this.status = "open";
    }




//functions

function addBug(e){
    e.preventDefault();
    //take input
    let des = description.value;
    let sev = severity.value
    let resp = responsible.value;
    let newBugName = bugName.value;
    let bugStatus;
    newBugItem = new Bug(newBugName, des, sev, resp, bugStatus);
    

    //New Div
    // const bugDiv = document.createElement("ul");
    // bugDiv.classList.add('bugListDiv');
    //create prop divs
    const bugNameDiv = document.createElement("div");
    bugNameDiv.classList.add('bugNameDiv');
    const bugDesDiv = document.createElement("div");
    bugDesDiv.classList.add('bugDesDiv');
    const bugSevDiv = document.createElement("div");
    bugSevDiv.classList.add('bugSevDiv');
    const bugRespDiv = document.createElement("div");
    bugRespDiv.classList.add('bugRespDiv');
    const bugStatusDiv = document.createElement("div");
    bugStatusDiv.classList.add('bugStatusDiv');
    const closeBugButton = document.createElement("button");
    closeBugButton.classList.add('closeBugButton');
    const deleteBugButton = document.createElement("button");
    deleteBugButton.classList.add('deleteBugButton');

     // imgs
     let clockImg = document.createElement("img");
     clockImg.classList.add('clockImg');
     clockImg.src="http://clipartmag.com/images/clock-clipart-12.png";
     let personImg = document.createElement("img");
     personImg.classList.add('personImg');
     personImg.src="http://getdrawings.com/img/head-and-shoulders-silhouette-19.png";
    

    //Values to div
    bugNameDiv.innerText = "Issue Name: " + newBugItem.bugName;
    bugDesDiv.innerText = "Issue Description: " + newBugItem.description;
    bugSevDiv.innerText = newBugItem.severity;
    bugRespDiv.innerText = newBugItem.responsible;
    newBugItem.bugStatus="Open";
    bugStatusDiv.innerText = newBugItem.bugStatus;
    console.log(bugStatusDiv)
    closeBugButton.innerText = "Close";
    deleteBugButton.innerText = "Delete";
    

    //create New Bug Div
    const newBug = document.createElement("div");
    newBug.appendChild(bugNameDiv);
    newBug.appendChild(bugDesDiv);
    bugSevDiv.prepend(clockImg);
    newBug.appendChild(bugSevDiv);
    newBug.appendChild(bugRespDiv);
    bugRespDiv.prepend(personImg);
    newBug.appendChild(bugStatusDiv);
    newBug.appendChild(closeBugButton);
    newBug.appendChild(deleteBugButton);
    newBug.classList.add('bugItem');
    

    //NewbugList
    const NewbugList = document.createElement("ul");
    NewbugList.classList.add('bugList');
    NewbugList.appendChild(newBug);

    //append new bug to element
    // bugDiv.appendChild(NewbugList);
    bugLog.appendChild(NewbugList);
    bugLogArray.push(NewbugList);
    console.log(bugLogArray)

    //Local Storage
  
    // reset form
    description.value = "";
    severity.value= "Choose Severity";
    responsible.value= "";
    bugName.value= "";
}

function closeBugLog(e){
    //declare vars
    e.preventDefault();
    const item = e.target;
    //change status from open to closed
    if(item.classList[0] === 'closeBugButton'){
        const bugItem = item.parentElement;
        bugItem.classList.toggle("completed");
        this.bugStatus = "Closed"
        this.status = "Closed"
        this.bugStatus.innerText ="Closed"
        this.status.innerText ="Closed"
        console.log(this.bugStatus)
        console.log("bug closed");
        console.log(bugLogArray)

    }
    //delete
    if(item.classList[0] === 'deleteBugButton'){
        const bugItem = item.parentElement; 
        // bugItem.addEventListener("transitionend", function() {
            bugItem.remove();
            console.log(bugLogArray)
        // });

    }
    
}

function filterBugs(e){
    let bugs = bugLog.childNodes;
    bugs.forEach(function(bugLog) {
        switch(e.target.value){
            case "all":
                bugs.style.display ="flex";
                break;
            case "complete":
                if(buglogSort.classList.contains("completed")){
                    bugs.style.display = "flex";
                } else {
                    bugs.style.display = "none";
                }
                break;
            case "incomplete":
                if(!buglogSort.classList.contains("completed")){
                    bugs.style.display ="flex";
                }  else {
                    bugs.style.display = "none";
                }   
                break;
        }
    })
}



addBtn.addEventListener('click', addBug);
bugLog.addEventListener('click', closeBugLog);
buglogSort.addEventListener('click', filterBugs);