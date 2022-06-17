const form = document.querySelector(".form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".free-trial-btn");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  //   first name validation
  if (firstName.value.trim() == "") {
    error(firstName, "first name can not be empty");
  } else {
    success(firstName);
  }

  //   last name validation
  if (lastName.value.trim() == "") {
    error(lastName, "last name can not be empty");
  } else {
    success(lastName);
  }

  //   Password validation
  if (password.value.trim() == "") {
    error(password, "Password can not be empty");
  } else {
    success(password);
  }

  //   Email validation
  if (email.value.trim() == "") {
    error(email, "looks like this is not an email");
  } else {
    success(email);
  }

  //  Email pattern validation
  if (email.value.match(pattern)) {
    success(email);
  } else {
    error(email, "looks like this is not an email");
  }
});

function error(element, msg) {
  element.style.border = "3px hsl(0, 100%, 74%) solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  const x = parent.querySelector("img");
  const z = parent.querySelector("input");
  z.placeholder = "";
  x.style.display = "block";
  p.innerHTML = msg;
  p.style.color = "hsl(0, 100%, 74%)";
}

function success(element) {
  element.style.border = "3px hsl(154, 59%, 51%) solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  const x = parent.querySelector("img");
  const z = parent.querySelector("input");
  z.placeholder = "";
  x.style.display = "none";
  p.textContent = "";
}
