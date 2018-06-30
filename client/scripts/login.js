$(document).ready(function(){
  $("#login").click(function(next){
    let credentials = {
      userEmail: $("#userEmail").val(),
      password: $("#password").val()
    }
    console.log(credentials)
    $.post("http://localhost:8001/createUser", credentials, function(data, status){
      console.log(data, status)
    })
    next.preventDefault()
  })
  $("#signUp").click(function(){
    alert("signUp")
  })
})
