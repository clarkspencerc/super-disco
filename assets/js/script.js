//grab current date from moment.js and have it display on current hour id 

// create a function tied to an event listner so when you click save button it takes the text from your descripiton area and saves it to local storage with the block ID saved as a Key 
$(".saveBtn").on("click", function(){
    var textValueEL = $(this).siblings(".description").val();
    var timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValueEL); 
}); 
// target a specific div block's id and it's text area and localstorage.getitem to set text value from Localstorage
    $("#9 .description").val(localStorage.getItem("9"));
// get the current hour from moment.js with which we can compare the div IDs to add classes: past, present, or future

    // create a conditional that targets the time block in the HTML, grab the timeblock id and then add
    // conditional that if id is > current time then add class for color: pst 
