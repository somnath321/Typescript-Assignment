var mckv = new School();
var svm = new School();
var carmel = new School();
var lions = new School();
mckv.schoolName = "mckv";
svm.schoolName = "svm";
carmel.schoolName = "carmel";
lions.schoolName = "lions";
var schoolList = [];
function displayOut(val) {
    var s = document.getElementById("out-wrap");
    while (s.firstChild) {
        s.removeChild(s.firstChild);
    }
    var wrap = document.getElementById("out-wrap");
    for (var i = 0; i < val.studentsList.length; i++) {
        var temp = val.studentsList[i].Name;
        var item = document.createElement('li');
        item.textContent = temp;
        item.className = "jk";
        wrap.appendChild(item);
    }
}
function validate() {
    var num1 = document.getElementById("name").value;
    var num2 = document.getElementById("class").value;
    var num3 = document.getElementById("age").value;
    var num4 = document.getElementById("favs").value;
    if (num1 == "") {
        alert("Please provide your name!");
        return false;
    }
    else if (num2 == "") {
        alert("Please provide your class!");
        return false;
    }
    else if (num3 == "") {
        alert("Please provide your age!");
        return false;
    }
    else if (num4 == "") {
        alert("Please provide your favsubject!");
        return false;
    }
    return true;
}
var saveData = function (e) {
    var de = validate();
    if (de == true) {
        e.preventDefault();
        var mform = document.getElementById('myform');
        var student1 = new Student();
        var n = document.getElementById('name');
        var c = document.getElementById('class');
        var a = document.getElementById('age');
        var f = document.getElementById('favs');
        var s = document.getElementById('school');
        var school = s.value;
        school = school.toLowerCase();
        switch (school) {
            case "mckv":
                mckv.studentsList.push(student1);
                break;
            case "svm":
                svm.studentsList.push(student1);
                break;
            case "carmel":
                carmel.studentsList.push(student1);
                break;
            case "lions":
                lions.studentsList.push(student1);
                break;
        }
        student1.Name = n.value;
        student1.Age = Number(a.value);
        student1.Class = Number(c.value);
        student1.favSub = f.value;
        mform.reset();
    }
};
var searchData = function (e) {
    e.preventDefault();
    var srch = document.getElementById('searchtxt');
    var text = srch.value;
    if (text != "mckv" && text != "svm" && text != "carmel" && text != "lions" && text != "") {
        alert("Enter valid name of school");
    }
    switch (text) {
        case "mckv":
            displayOut(mckv);
            break;
        case "svm":
            displayOut(svm);
            break;
        case "carmel":
            displayOut(carmel);
            break;
        case "lions":
            displayOut(lions);
            break;
        default:
            break;
    }
};
document.getElementById("submit").addEventListener('click', saveData);
document.getElementById("search").addEventListener('click', searchData);
