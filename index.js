// let`s get the H1 header :
const h1 = document.querySelector('h1');
//  change the h1 text :
h1.innerText = "Enter your birth year"

function calculateAge(event){
    // when the form is submitted, prevent the default behavior
   event.preventDefault();
    // (don`t let the formn auto-submit)
    // get the birth year that was entered
    const birthYear = event.target.birthYear.value;
    // subtract from the current year (2023) to get age
    const age = Date - birthYear ;
    // display age un the h2 (" In 2023, you will turn XX years old ")
    const h2 = document.querySelector('h2');
    h2.innerText = "In" +Date+ ", you will turn " + age + " years old.";


}


// add an onsubmit event to the form
const form =document.querySelector('form');
form.addEventListener('submit', calculateAge);




