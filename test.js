//part 1

const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup',
'Salmon'];
let text = ""
for ( let i = 0 ; i < dishes.length; i++)
{text += dishes[i] + "<br>"}

//part 2

const button = document.createElement("button");
button.innerHTML = "test" 
const body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener('click', function(){
  const myInsertText = 'javascript test';
myText.innerHTML = myInsertText;
})

document.body.style.backgroundColor = "blue"


//part 3

async function fetchUsers(){
let response = await fetch ("https://regres.in/api/users")
console.lof(response.users)}
fetchUsers();



 console.log (data.message)
 




//part 4
class person {
 constructor(name) {
   this.name = fristName;

 }
 logPerson(){
     if(this.persons !== 0) {
      console.log('hello,my name is ${this.name}');
           }
       }
 }
 const Peter = new Person("Peter");
Peter.logPerson(Peter);