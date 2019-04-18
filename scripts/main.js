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
    var nextStudent = getStudent();
    displayStudent(nextStudent);
}
function getStudent() {
    var s = new Student();
    s.firstName = document.getElementById("first-name").value;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(stu) {
    alert(stu.firstName + " " + stu.lastName);
}
