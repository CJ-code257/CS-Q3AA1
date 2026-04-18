// File: script.js
// Purpose: Validates the EqualEd signup form
// Author: [Your Name]
// Date: [Date]

function validateForm() {

  // Clear everything first
  document.getElementById("nameErr").innerHTML = "";
  document.getElementById("bdayErr").innerHTML = "";
  document.getElementById("sexErr").innerHTML = "";
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("userErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";
  document.getElementById("pass2Err").innerHTML = "";
  document.getElementById("areaErr").innerHTML = "";
  document.getElementById("helpErr").innerHTML = "";
  document.getElementById("freqErr").innerHTML = "";
  document.getElementById("success").innerHTML = "";

  let ok = true;

  //Personal information

  let name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameErr").innerHTML = "Full name must be at least 2 characters.";
    ok = false;
  }

  let bday = document.getElementById("bday").value;
  if (bday === "") {
    document.getElementById("bdayErr").innerHTML = "Birthdate is required.";
    ok = false;
  } else {
    let today = new Date();
    let born = new Date(bday);
    let age = today.getFullYear() - born.getFullYear();
    if (today.getMonth() < born.getMonth() || (today.getMonth() === born.getMonth() && today.getDate() < born.getDate())) {
      age--;
    }
    if (age < 13) {
      document.getElementById("bdayErr").innerHTML = "You must be at least 13 years old.";
      ok = false;
    }
  }

  let sexList = document.getElementsByName("sex");
  let sexOk = false;
  for (let i = 0; i < sexList.length; i++) {
    if (sexList[i].checked) sexOk = true;
  }
  if (!sexOk) {
    document.getElementById("sexErr").innerHTML = "Please select a sex option.";
    ok = false;
  }

  let email = document.getElementById("email").value.trim();
  if (email.indexOf("@") === -1 || email.indexOf(".", email.indexOf("@")) === -1) {
    document.getElementById("emailErr").innerHTML = "Email must contain '@' and a dot after it.";
    ok = false;
  }

  //Account details

  let user = document.getElementById("user").value.trim();
  if (user.length < 8 || user.length > 20) {
    document.getElementById("userErr").innerHTML = "Username must be 8-20 characters.";
    ok = false;
  } else {
    let allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let badChar = false;
    for (let i = 0; i < user.length; i++) {
      if (allowed.indexOf(user[i]) === -1) badChar = true;
    }
    if (badChar) {
      document.getElementById("userErr").innerHTML = "Username can only contain letters and numbers.";
      ok = false;
    }
  }

  let pass = document.getElementById("pass").value;
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "A" && pass[i] <= "Z") hasUpper = true;
    if (pass[i] >= "a" && pass[i] <= "z") hasLower = true;
    if (pass[i] >= "0" && pass[i] <= "9") hasNum = true;
  }
  if (pass.length < 10) {
    document.getElementById("passErr").innerHTML = "Password must be at least 10 characters.";
    ok = false;
  } else if (!hasUpper) {
    document.getElementById("passErr").innerHTML = "Password needs at least one uppercase letter.";
    ok = false;
  } else if (!hasLower) {
    document.getElementById("passErr").innerHTML = "Password needs at least one lowercase letter.";
    ok = false;
  } else if (!hasNum) {
    document.getElementById("passErr").innerHTML = "Password needs at least one number.";
    ok = false;
  }

  let pass2 = document.getElementById("pass2").value;
  if (pass2 !== pass) {
    document.getElementById("pass2Err").innerHTML = "Passwords do not match.";
    ok = false;
  }

  //Topic Questions

  let area = document.getElementById("area").value;
  if (area === "") {
    document.getElementById("areaErr").innerHTML = "Please choose an education area.";
    ok = false;
  }

  let helpList = document.getElementsByName("help");
  let helpOk = false;
  for (let i = 0; i < helpList.length; i++) {
    if (helpList[i].checked) helpOk = true;
  }
  if (!helpOk) {
    document.getElementById("helpErr").innerHTML = "Please select at least one option.";
    ok = false;
  }

  let freqList = document.getElementsByName("freq");
  let freqOk = false;
  for (let i = 0; i < freqList.length; i++) {
    if (freqList[i].checked) freqOk = true;
  }
  if (!freqOk) {
    document.getElementById("freqErr").innerHTML = "Please select how often you engage.";
    ok = false;
  }

  if (ok) {
    document.getElementById("success").innerHTML = "Welcome to EqualEd! Your account has been created.";
  }

  return ok;
}