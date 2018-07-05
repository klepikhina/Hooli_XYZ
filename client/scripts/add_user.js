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
      if(credentials.userName && credentials.userEmail && credentials.password){
        $.post("http://localhost:8001/api/createUser", credentials, function(data, status){
          console.log(data,status)
          window.location.replace("http://localhost:8001/login")
        })
      }
      else(alert("Error: Missing Fields"))
    }
    else alert("Error: passwords do not match")
    next.preventDefault()
  })
})
