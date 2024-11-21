let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let nameInput = document.querySelector(".hide");
let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let para = document.querySelector(".para");
let somePasswards = document.querySelector(".somePasswards");
let closeBtn = document.querySelector(".closeBtn");
let password = document.querySelector("#password");

const checkPass = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

signInBtn.addEventListener("click", () => {
  title.innerHTML = "Sign In";
  underline.style.transform = "translateX(30px)";
  nameInput.style.maxHeight = "0px";
  para.innerHTML = "Lost password";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
});

signUpBtn.addEventListener("click", () => {
  title.innerHTML = "Sign Up";
  underline.style.transform = "translateX(0px)";
  nameInput.style.maxHeight = "60px";
  para.innerHTML = "password suggestions";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
});

const showpass = () => {
  somePasswards.style.display = "block";
};

closeBtn.addEventListener("click", () => {
  somePasswards.style.display = "none";
});
