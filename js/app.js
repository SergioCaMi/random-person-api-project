const imagePhoto = document.querySelector("#photo");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const countryName = document.querySelector("#country");
const phoneNumber = document.querySelector("#phone");
const email = document.querySelector("#email");
// const btnGenerate = document.querySelector("#btn");Eliminamos para haer el BONUS

const newPerson = setInterval(() => {
    generateNewPerson();
}, 5000);

 async function generateNewPerson(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
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