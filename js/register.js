function register(){
    console.log('here')
    let email = document.getElementById("email").value
    let pass  = document.getElementById("Pass" ).value
    let username = document.getElementById("username").value
    console.log( email, pass )
    let obj = {
        email,
        password : pass,
        username
    };
    obj = JSON.stringify(obj)
    fetch('http://localhost:3500/register',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: obj,
    })
    .then( res => {
        if(res.status==200) alert("user Created")
        else if (res.status>= 300) alert("something went wrong please try again try with another email")
        return res.json()} )
    .then( res=>{
        if ( res.register ) alert('user created please login' )
        else alert(`please use another email, email occupied`)
        console.log(res)} )
    .catch( error=>console.log(error.msg.message,"hjkwjk") )
    
}