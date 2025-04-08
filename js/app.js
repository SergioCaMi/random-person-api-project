const imagePhoto = document.querySelector("#photo");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const countryName = document.querySelector("#country");
const phoneNumber = document.querySelector("#phone");
const email = document.querySelector("#email");
const btnGenerate = document.querySelector("#btn");
btnGenerate.style.display = "none"; //Eliminamos para hacer el BONUS 1
const btnInterview = document.querySelector("#btnInterview");
btnInterview.style.display = "block";//BONUS 2

const callInterview = document.querySelector("#call-interview");
callInterview.style.display = "block";//BONUS 2

let data; //La ponemos como global porque el estado actual de la app varía con la persona actual.

const newPerson = setInterval(() => {
    generateNewPerson();
}, 5000);

 async function generateNewPerson(){
    const response = await fetch("https://randomuser.me/api/");
    data = await response.json();
    console.log(data.results[0].name.first);
    console.log(data.results[0].name.last);
    console.log(data.results[0].location.country);
    console.log(data.results[0].phone);
    console.log(data.results[0].email);
    console.log(data.results[0].picture.medium);
    
    firstName.textContent = data.results[0].name.first;
    lastName.textContent = data.results[0].name.last;
    countryName.textContent = data.results[0].location.country;
    phoneNumber.textContent = data.results[0].phone;
    email.textContent = data.results[0].email;
    imagePhoto.src = data.results[0].picture.medium;



};

btnInterview.addEventListener("click", ()=>{
    const newTr = document.createElement("tr");
    newTr.innerHTML = `<td>${data.results[0].name.first} ${ data.results[0].name.last}</td><td>${data.results[0].phone}</td>`;
    callInterview.appendChild(newTr);
});
