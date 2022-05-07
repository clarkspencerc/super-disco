var currentDayEl = document.querySelector("#currentDay");
var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//grab current date from moment.js and have it display on currentDay id 

var today = moment().format('dddd MMM Do'); 
currentDayEl.textContent = "Today is " + today; 

// create a function tied to an event listner so when you click save button it takes the text from your descripiton area and saves it to local storage with the block ID saved as a Key 
$(".saveBtn").on("click", function(){
    var textValueEL = $(this).siblings(".description").val();
    var timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValueEL); 
}); 
// target a specific div block's id and it's text area and localstorage.getitem to set text value from Localstorage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12")); 
    $("#13 .description").val(localStorage.getItem("13")); 
    $("#14 .description").val(localStorage.getItem("14")); 
    $("#15 .description").val(localStorage.getItem("15")); 
    $("#16 .description").val(localStorage.getItem("16")); 
    $("#17 .description").val(localStorage.getItem("17")); 

// get the current hour from moment.js with which we can compare the div IDs to add classes: past, present, or future

var hour = moment().format('H'); 
console.log(hour); 
    // create a conditional that targets the time block in the HTML, grab the timeblock id and then add
    // conditional that if id is > current time then add class for color: pst 

    for( i = 0; i < workingHours.length; i++){

        if( workingHours[i] < hour ){
            // add past class by  getelement by id id = workingHours[i]
            var updatePast = document.getElementById(workingHours[i]);
            updatePast.classList.add("past");
            // need to account for 2 < 10
        }
        else if( workingHours[i] == hour){
            // add current class 
            var updateCurrent = document.getElementById(workingHours[i]);
            updateCurrent.classList.add("present");
        }
        else if (workingHours[i] > hour){
            var updateFuture = document.getElementById(workingHours[i]);
            updateFuture.classList.add("future");
            // add future class 
        }
    }
