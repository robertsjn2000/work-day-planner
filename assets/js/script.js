var dateTime = function(){
    var today= moment().format("MMM Do YYYY h:mm:ss")
    $("#currentDay").text(today)
};
// created a function that will display the current time of day in an assigned position at the top of the page. This current time of day will also count in iterations of 1 second. This utilizes the moment api. 
setInterval(dateTime, 1000);
// this function saves text inputed into the text boxes in local storage along with their associated time.
$(".btn").on("click", function(){
    var parentContainerTr= $(this).parent().parent()
    var hour= parentContainerTr.attr("id").split("-")[1]
    var inputControl = parentContainerTr.find("input")
    var value= inputControl.val()
    localStorage.setItem(hour, value)
})
// this for loop helps assosiate the saved information in local storage with the correct time that it was saved in.
for(var index = 9; index <18; index++){
var parentContainerTr = $("#hour-" + index)
var inputControl = parentContainerTr.find("input")
var value = localStorage.getItem(index)
inputControl.val(value)
}
// This function uses if else statements to change the color of the text boxes based on the current time of day.
function highLightDay(){
    var currentHour = moment().format("HH")
    $(".time").each(function(){
        var trContainer = $(this)
        var th = trContainer.find("th")
        var td = trContainer.find("td")
        var hour = trContainer.attr("id").split("-")[1]
        if(hour< currentHour){
            th.addClass("past")
            td.addClass("past")
        }
        else if(hour == currentHour){
            th.addClass("present")
            td.addClass("present")
        }
        else{
            th.addClass("future")
            td.addClass("future")
        }
        
    })
}
highLightDay()