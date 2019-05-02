
// Student Class:
/**
 * Represents a CPTC student
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

//Test code ( Student Object)
// Create a New Instance or Creating an object
// Instantiate an object
let testStu:Student = new Student();
testStu.firstName = "Jose";
testStu.lastName = "Salgado";
testStu.dateOfBirth = new Date(1990, 3);

// Only one button so it goes to the one button found below it.
window.onload = function(){
    let regBtn = <HTMLElement>document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent(){
    if(isValid()){
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
    }
}

function isValid(){
    //Validate all required elements( grabs all req elem data req )
    let reqElems = document.querySelectorAll("main > input[data-required]")        //gets all inputs that are children of main and have data required
    
    let valid = true;

    // looping thru them
    for (let i = 0; i < reqElems.length; i++){
        let currInput = <HTMLInputElement>reqElems[i];
        // for each input were checking if the value is not empty space ( trim eliminates empty space)
        if(currInput.value.trim() == ""){
            //disp err msg
            //grab next elem sibling(span)
            let span = currInput.nextElementSibling;
            //grab err msg from span that we found
            let msg = span.getAttribute("data-msg");
            //put message back into inner HTML
            span.innerHTML = msg;
            valid = false;

        }
    }
    return valid;
}
    //foreach element
        // check if input is empty
        // if true, display err in span and set boolean flag


// Retrieve all information off of form:
/**
 * Gets user input from the form  and wraps it in a student object.
 */
function getStudent():Student{
    let s = new Student();
    // let fname =                        can  also do this instead of let s.firstName.
    s.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;
    //TODO: get date of birth
    return s;
}

// Find out how to make a list and add them to an unorder list we added to HTML
function displayStudent(stu:Student){
    //<li></li>
    let studentLI:HTMLLIElement = document.createElement("li");
    //<li>J. Doe</li>
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    studentLI.onclick = function(){
        
        let agree = confirm("Are you sure you want to delete?");
        // whichever one is triggering the onclick 'this' is going in the item
        if(agree){
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
         

    } 
    
    // Getting <ul> and appending the new <li>
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}