$(document).ready(function(){
  $("#signUp").click(function(next){
    console.log("sign up")
    if($("#password").val() == $("#passConf").val()){
      let credentials = {
        userName: $("#userName").val(),
        userEmail: $("#userEmail").val(),
        password: $("#password").val()
      }
      console.log(credentials)
      $.post("http://localhost:8001/api/createUser", credentials, function(data, status){
        console.log(data,status)
      })
    }
    else alert("Passwords Do Not Match")
    next.preventDefault()
  })
})
