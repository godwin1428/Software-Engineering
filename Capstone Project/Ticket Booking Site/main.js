
//Declaring variables
let textField = document.getElementById('firstNameP1');
let firstNameError = document.getElementById("firstNameError");
let from = document.getElementById('from');
let to = document.getElementById('to');
let flightError = document.getElementById('flightError');

//For radio button.
let type = document.getElementsByName('itineraryType');
let isReturn = true; 

//Variables and function to set today date in from date picker.
let date = new Date();
let todayDate = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getUTCFullYear();
let setFromDate;

setFromDatePicker();

//Variables to remove return date picker and setting up event listener.
let owRadioButton = document.getElementById('oneway');
owRadioButton.addEventListener("click",removeReturnDatePicker);
let isReturnDatePicker = true;

//Variable to add from return date picker and setting up event listener.
let retRadioButton = document.getElementById('return');
retRadioButton.addEventListener("click",addReturnDatePicker);


//Setting up the today date in from date picker.
function setFromDatePicker(){
    if(currentMonth < 10){
        currentMonth = "0" + currentMonth;
    }  
    if(todayDate < 10){
        todayDate = "0" + todayDate;
    }
    setFromDate = currentYear + "-" + currentMonth + "-" + todayDate;
    
    document.getElementById("fromDate").setAttribute("min", setFromDate);
    document.getElementById("returnDate").setAttribute("min", setFromDate);
}

//Function to remove return date picker.
function removeReturnDatePicker(){
    if(isReturnDatePicker){
        let temp = document.getElementById('returnDate');
        temp.style.display = 'none';

        let temp1 = document.getElementById('returnLabel');
        temp1.style.display = 'none';
        
        isReturnDatePicker = false;
    }
}

//Variables to add return date picker.
function addReturnDatePicker(){
    if(!isReturnDatePicker){

        let temp = document.getElementById('returnDate');
        temp.style.display = 'inline-block';

        let temp1 = document.getElementById('returnLabel');
        temp1.style.display = 'block';
        
        isReturnDatePicker = true;
    }
}

//Calculates number of characters from.
function checkName(name){
    if (name.length < 5){
            alert("Please enter a valid name. Minimum characters are 5");
            
        }
}

//Determining which radio button is selected.
function checkItineraryType(){
    if(type[0].checked){
        isReturn = false;
    }else{
        isReturn = true;
    }
}

//Alerts when from and to cities are same.
function checkFromAndTo(){
    if (from.value === to.value){
            alert("Please enter correct cities");
            
        }
}


