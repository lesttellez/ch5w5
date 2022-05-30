var day = moment();

$(document).ready(function(){
    $("#currentDay").text(moment().format(" MMMM Do, YYYY"));
    $(".saveBtn").on("click", function(){
        var plannerWords = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerWords);
    });



$("#5 .description").val(localStorage.getItem("5"));
$("#6 .description").val(localStorage.getItem("6"));
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));

function timeChange(){
    var currentHour = moment().hour();

    $('.time-block').each(function(){
        var idTime = parseInt($(this).attr("id"));
        if (idTime < currentHour){
            $(this).addClass("past");
        } 
        else if (idTime === currentHour){
            $(this).addClass("present");
            $(this).addClass("past");
        }
        else {$(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
        }
    })
}
timeChange();
var timeInterval = setInterval(time, 1000)
});

