const email = document.querySelector(".a");
const call = document.querySelector(".b");
const sms = document.querySelector(".c");
const logo=document.querySelector(".logo");
logo.addEventListener("click", function(){ 
  location. href = "crmMain.html";
  });
email.addEventListener("click", function(){ 
  location. href = "email.html";
  });
  call.addEventListener("click", function(){ 
  location. href = "call.html";
  });
  sms.addEventListener("click", function(){ 
  location. href = "sms.html";

  });