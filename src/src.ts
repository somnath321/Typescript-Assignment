let mckv : School= new School();
let svm  : School= new School();
let carmel : School= new School();
let lions : School= new School();
mckv.schoolName="mckv";
svm.schoolName="svm";
carmel.schoolName="carmel";
lions.schoolName="lions";
let schoolList:Array<string>=[];


function displayOut(val:School):void{
  let s:any = <HTMLElement>document.getElementById("out-wrap");
  while(s.firstChild){
    s.removeChild(s.firstChild);
    } 
  let wrap=<HTMLElement>document.getElementById("out-wrap");
  for(let i = 0; i < val.studentsList.length; i++){
    let temp=val.studentsList[i].Name ;
    let item = document.createElement('li');
    item.textContent=temp;
    item.className="jk";
    wrap.appendChild(item);
 
 }
}


function validate() {
  let num1= (<HTMLInputElement>document.getElementById("name")).value;
  let num2= (<HTMLInputElement>document.getElementById("class")).value;
  let num3= (<HTMLInputElement>document.getElementById("age")).value;
  let num4= (<HTMLInputElement>document.getElementById("favs")).value;
  if( num1 == "" ) {
    alert( "Please provide your name!" );
    return false;
 }
 else if(num2 == "" ) {
  alert( "Please provide your class!" );
  return false;
}
else if( num3 == "" ) {
  alert( "Please provide your age!" );
  return false;
}
else if( num4 == "" ) {
  alert( "Please provide your favsubject!" );
  return false;
}
return true;
    
}
const saveData=(e:any) => { 
  let de:boolean=validate();
  if(de==true){ 
  e.preventDefault();
  
let mform = <HTMLFormElement>document.getElementById('myform');
let student1 :Student = new Student();
let n:HTMLElement = <HTMLInputElement>document.getElementById('name');
let c:HTMLElement = <HTMLInputElement>document.getElementById('class');
let a:HTMLElement = <HTMLInputElement>document.getElementById('age');
let f:HTMLElement = <HTMLInputElement>document.getElementById('favs');
let s:HTMLElement = <HTMLInputElement>document.getElementById('school');

let school = (<HTMLInputElement>s).value;
school=school.toLowerCase();

switch(school)
{
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

student1.Name=(<HTMLInputElement>n).value;
student1.Age=Number((<HTMLInputElement>a).value);
student1.Class=Number((<HTMLInputElement>c).value);
student1.favSub=(<HTMLInputElement>f).value;
mform.reset();
  }
}

const searchData=(e:any) => {  
  e.preventDefault();
  let srch:HTMLElement = <HTMLInputElement>document.getElementById('searchtxt');
  let text = (<HTMLInputElement>srch).value;
  if(text!="mckv" && text!="svm" && text!="carmel" && text!="lions" && text!="")
  {
    alert("Enter valid name of school");
  }
  switch(text)
{
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
}
(<HTMLInputElement>document.getElementById("submit")).addEventListener('click',saveData);
(<HTMLInputElement>document.getElementById("search")).addEventListener('click',searchData);