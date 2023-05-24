const form = document.getElementById("form");
const body = document.body;
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const handle = document.querySelector("#handle");


form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form submit
  console.log("form submitted");

  body.classList.add("color-background");

  name.value = "";
  email.value = "";
  handle.value = "";

  setTimeout(() => {alert("We have received your info! Thanks for signing up")}, 500);
});
