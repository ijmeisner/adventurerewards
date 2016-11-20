var button = document.querySelector("#button"); 
var points = document.querySelector("#points");
var userScore = 135; 

button.addEventListener("click", function(){
        userScore += 30; 
        console.log("points added");
        alert("30 Points have been added to your account!")
        points.textContent = userScore; 
}); 