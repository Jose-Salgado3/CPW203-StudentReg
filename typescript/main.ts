
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
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

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