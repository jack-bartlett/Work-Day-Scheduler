var saveBtn = $(".saveBtn");

saveBtn.on('click', function() {
    alert("you clicked me!")
 });

var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

function getCurrentTime(){
 
    var currentTime = moment().hours()
        console.log(currentTime)
    };

$(".time-block").each(function(){
    
})
    
});
 
}