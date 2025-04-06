$("#btn").on("click" , function() {
  const emailvalidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const email = $("#email").val();
  const password = $("#password").val();
  const conform_password = $("#conform_password").val();

 let isValid = true;

  console.log(email,password,conform_password);

  if(email === "" || !emailvalidator.test(email))
  {
      $("#error").css("color","white").text(" E-mail is invalid !!");
      isValid = false;
  }

  if(password == "" || conform_password == "" || !passwordValidator.test(password))
  {
      isValid = false;
      $("#error1").css("color","white").text(" password formate not accepted !!");
  }

  if(password != conform_password)
  {
      isValid = false;
      $("#error1").css("color","white").text(" password is not same !");
  }

  if (isValid) {
    $("#status").css({"color":"green","text-align": "center"}).text("Signup successfully!");
} else {
    $("#status").css({"color":"red","text-align":"center"}).text("Signup failed!");
}
  console.log("passed!");
});







