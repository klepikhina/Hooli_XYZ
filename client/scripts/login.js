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

function createUser(path, data){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
  }
  return
}
