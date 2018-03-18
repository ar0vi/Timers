
$(document).ready(function(){

    var totalTime= 300;    
    
    function tick() {
    if (totalTime > 0){
    totalTime--;
    var countDown= setTimeout(tick, 1000);
    var converted = timeConverter(totalTime); 
    $("#timerDisplay").text(converted);  
} else {
  if (totalTime ==0){
    clearTimeout(countDown);
    $("#timerDisplay").text("0:00")
  }
}
}
    function timeConverter(t) {
      
          var minutes = Math.floor(t / 60);
          var seconds = t- (minutes * 60);
          
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
      
          if (minutes === 0) {
            minutes = "0"
          }

          return minutes + ":" + seconds;
        }

  
      tick()
        
      $("input[type=radio]").on("click",answerCount)
     
          function answerCount(){
          var correct= 0 
          var incorrect= 0 
          if ($("input:checked").val()= "correct"){
          correct++
          }

          if ($("input:checked").val()= "incorrect"){
            incorrect++
          }
        console.log("You anwered "+ correct + " correctly")
        console.log("You answered " + incorrect + " incorrectly")
        }

    answerCount();




});