function openModal(){
    document.getElementById('story-modal').style.display='block';
}

function closeModal(){
    document.getElementById('story-modal').style.display='none';
}

//close when pressing out of the modal

window.onclick=function(event){
    const modal= document.getElementById('story-modal')
    if(event.target === modal){    
    modal.style.display='none';
    }
}

//log in validation
function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  const correctUsername = "hero123";
  const correctPassword = "petties123";
    
  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both fields.";
    return false;
  } else if (username === correctUsername && password === correctPassword) {
    errorMessage.textContent = "";
    localStorage.setItem('isLoggedIn','true')
    alert("Logged in successfully! 😺 ");
    window.location.href = 'index.html'; 
    return false;
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".post-form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn === "true") {
        alert("Your post has been submitted 🙌");
        window.location.href = "index.html";
      } else {
        alert("You must be signed in first 😕");
        window.location.href = "sign_in.html";
      }
    });
  });
});


//log out 

function logout() {
  localStorage.removeItem('isLoggedIn');
  alert('You are logged out 🥲')
}



