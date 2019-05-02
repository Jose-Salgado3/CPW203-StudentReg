var Student = (function () {
    function Student() {
    }
    return Student;
}());
var testStu = new Student();
testStu.firstName = "Jose";
testStu.lastName = "Salgado";
testStu.dateOfBirth = new Date(1990, 3);
window.onload = function () {
    var regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    if (isValid()) {
        var nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    var reqElems = document.querySelectorAll("main > input[data-required]");
    var valid = true;
    for (var i = 0; i < reqElems.length; i++) {
        var currInput = reqElems[i];
        if (currInput.value.trim() == "") {
            var span = currInput.nextElementSibling;
            var msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            valid = false;
        }
    }
    return valid;
}
function getStudent() {
    var s = new Student();
    s.firstName = document.getElementById("first-name").value;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(stu) {
    var studentLI = document.createElement("li");
    studentLI.innerText = stu.firstName + " " + stu.lastName;
    studentLI.onclick = function () {
        var agree = confirm("Are you sure you want to delete?");
        if (agree) {
            var currItem = this;
            currItem.remove();
        }
    };
    var list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
