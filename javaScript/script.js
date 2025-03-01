const completeButton = document.querySelectorAll(".complete-btn");

for(let i=0; i<completeButton.length; i++) {
  const button = completeButton[i];
  

  button.addEventListener("click", ()=>{
    alert("board update successfully");
    button.disabled = true;
    button.style.opacity = "0.3";
    
    
    let taskAssignValue = document.getElementById("task-assign-value");
    let navBarValue = document.getElementById("nav-value");
  
    let newTaskAssignValue = parseInt(taskAssignValue.textContent);
    let newNavBarValue = parseInt(navBarValue.textContent);
   
    if(newTaskAssignValue>0 ) {
      newTaskAssignValue--;
      newNavBarValue++;
  
      taskAssignValue.textContent = newTaskAssignValue;
      navBarValue.textContent = newNavBarValue;
    
    }
    
    
    const notificationContainer = document.getElementById("notification");
    const notificationBase = "you have comolecated the task";
    const taskTitle = button.closest('.task-card').querySelector('h1').textContent;


    let allDisabled = Array.from(completeButton).every(btn => btn.disabled);
    if (allDisabled) {
      alert("Congrats!!! You have completed all the current task ");
    }

    const currentTime = new Date().toLocaleTimeString();
    let  getNotification = document.createElement("p");
    getNotification.style.cssText = "background-color: #fff; color: black; font-size: 14px; padding: 10px ; border-radius: 30px";
    
    getNotification.textContent = `${notificationBase} ${taskTitle} at ${currentTime}`;
    

    notificationContainer.appendChild(getNotification)

    const clearHistory = document.getElementById("clear-history");
    clearHistory.addEventListener("click", ()=>{
      getNotification.remove("p");
    })
    
  })

}



const todayName =document.getElementById("today");
const dateMonYear = document.getElementById("date-mon-year")
const daysName = ["sunday", "monday", "tuesday", "wednesday","thursday", "friday","saturday"];
let currentDate = new Date();

const thisDayName = daysName[currentDate.getDay()];

let DateFormate =currentDate.toLocaleString("en-US",{
  month : "short",
  day : "2-digit",
  year : "numeric"
})

todayName.innerText= thisDayName;
dateMonYear.innerText = DateFormate;



// rgb color

window.onload = () =>{
  backgroundChange ();
}

function backgroundChange () {
 const bgTheme = document.getElementById("bg-theme");
 
 bgTheme.addEventListener("click", function(){
    document.body.style.backgroundColor = generateRgbColor();
 })
}

function generateRgbColor () {
  const red = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  return `rgb(${red},${green},${blue})`

}





// discover something
const discoverSomething = document.getElementById("discover-something");

discoverSomething.addEventListener("click",function(){
  window.location.href ="index2.html"
})



