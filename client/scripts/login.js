$(document).ready(function(){
  $("#login").click(function(next){
    let credentials = {
      userEmail: $("#userEmail").val(),
      password: $("#password").val()
    }
    console.log(credentials)
    next.preventDefault()
  })
  $("#signUp").click(function(){
    alert("signUp")
  })
})
