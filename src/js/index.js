let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
   event.preventDefault();

   let username = document.getElementById("username");
   let password = document.getElementById("password");
 
   if (username.value === "admin" && password.value === "admin") {
      window.location.href = 'transport.html';
   } else {
      username.value = ""; 
      password.value = "";
      alert("Неверный логин или пароль! Повторите попытку входа")
   }

   return false;
}