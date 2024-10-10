//this is used to grade calculation
function calculateGrade(){
    var input = parseInt(document.getElementById("input").value.trim());
    var show = document.getElementById("show");
    if (input > 100){
        show.innerHTML = "Enter Score Between (0-100).., ";
    }
    else if (input >= 90 && input <=100){
        show.innerHTML = "GRADE : 'A'";
    }
    else if (input >= 80 && input <=89){
        show.innerHTML = "GRADE : 'B'";
    }
    else if (input >= 70 && input <=79){
        show.innerHTML = "GRADE : 'C'";
    }
    else if (input >= 60 && input <=69){
        show.innerHTML = "GRADE : 'D'";
    }
    else if (input >= 50 && input <=59){
        show.innerHTML = "GRADE : 'E'";
    }
    else if (input >0 && input <=49){
        show.innerHTML = "GRADE : 'F'";
    }
    else{
        show.innerHTML = "Please Enter Valid Input...";
    }
    document.getElementById("input").value = ""
}
//this is used to weekdays finder
function dayFind() {
    var day = document.getElementById("day").value.trim().toLowerCase()
    var result = document.getElementById('result')
    if (day === "sunday" || day === "saturday"){
        result.innerHTML = day + " is Weekend...Enjoy Your Day:)";

    }
    else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" ||day === "friday"){
        result.innerHTML = day +" is weekday ,get back to your work :(";

    }
    else{
        result.innerHTML = "please enter the valid day...";
    }
    document.getElementById("day").value = ''

}
// this is used to age category finder
function ageFind(){
    var age = parseInt(document.getElementById('age').value.trim())
    var result = document.getElementById('result')
    if(isNaN(age)){
        result.innerHTML = "Please Enter a Age"
    }
    else if (age >= 0 && age <=12){
        result.innerHTML = "Child"

    }
    else if (age >= 13 && age <=19){
        result.innerHTML = "Teenager"
    }
    else if (age >= 20 && age <=64){
        result.innerHTML = "Adult"
    }
    else if (age >= 65 && age <=120){
        result.innerHTML = "Senior Citizen"
    }
    else {
        result.innerHTML = "We Belive Your Value is More Bigger"
    }
    document.getElementById('age').value = ''
}
// this is used to multiplication table
function multiply(){
    var num = parseFloat(document.getElementById('input').value.trim());
    document.getElementById('result').innerHTML = "";
  
    if (num > 10 || num <= 0 || isNaN(num) ){
        document.getElementById('result').innerHTML = "Please Enter Value Between 1-10:";
    }
    else{
        var n=10
        var i=1
        while (i<=n) {
            document.getElementById('result').innerHTML += "<li>"+i +"*"+ num + '=' + (i*num)+"</li>";
            i++
    }
    
}   
document.getElementById('input').value = ''
}