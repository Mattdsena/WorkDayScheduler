var saveBtn = $(".saveBtn");

// Sets the current day, will change as each new day starts 
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// Time Block is colour coded to indicate whether it is past, present or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// When you click the save button, saves it in local storage
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

// When page is refreshed, then shows saved local storage if any
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

timeBlockColor();
usePlanner();

