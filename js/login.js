function login(){
    console.log('here')
    let email = document.getElementById("email").value
    let pass  = document.getElementById("Pass" ).value
    console.log( email, pass )
    let obj = {
        email,
        password : pass
    };
    obj = JSON.stringify(obj)
    fetch('http://localhost:3500/login',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: obj,
    })
    .then( res => res.json() )
    .then( res=>{
        if( res.auth ){ 
            localStorage.setItem("username", res.username)
            localStorage.setItem("islogin", true)
            alert(`${res.msg} as ${res.username}`)
            history.go(-1)
        }
        else alert(res.msg)
        console.log(res)} )
    
}