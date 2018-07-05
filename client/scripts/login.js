$(document).ready(function(){
  $("#login").click(function(next){
    let credentials = {
      userEmail: $("#userEmail").val(),
      password: $("#password").val()
    }
    console.log(credentials)
    $.post("http://localhost:8001/api/checkUser", credentials, function(data, status){
      if(data === true){window.location.replace("http://localhost:8001/")}
      else{
        alert("Incorrect Email or Password")
        window.location.replace("http://localhost:8001/signUp")
      }

    })
    next.preventDefault()
  })
})
