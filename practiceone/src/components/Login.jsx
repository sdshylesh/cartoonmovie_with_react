import { useRef,useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Login=()=>{
  let[userDetails , setUserDetails]=useState(null);
  console.log(userDetails)
let navigate=useNavigate();
let Email=useRef();
let Password=useRef();
useEffect(()=>{
  if(sessionStorage.getItem("userdetails")!=null)
  {
      let userdetails=sessionStorage.getItem("userdetails");
      userdetails=JSON.parse(userdetails);
      setUserDetails(userdetails);
  }
},[])


const handleLogin=(e)=>{
  const allData = JSON.parse(localStorage.getItem('signupInfo')) ;
  let length = allData.length;
        let userData=null;
        for(let i=0;i<length;i++) {
            if(Email.current.value === allData[i].Email 
              ) {
                 userData= allData[i];
            }
        }
        if(userData===undefined)
            {
       alert("user not exist signup first");
      navigate("/")
         }
        else if(userData.Password===Password.current.value)
           {
    alert("login successfull");
     setUserDetails(userData);
     sessionStorage.setItem("userdetails",JSON.stringify(userData))
     navigate("/main")
    }  
    else if(userData.Password!==Password.current.value){
      alert("login Unuccessfull");
      window.location.reload();
    }
        
 }

    return(
      <div className="login">
   <form class="row g-3"  >
          <h3 className="log">Login page</h3>
        
          <div class="col-md-6" id="cc">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"  ref={Email}></input>
  </div>
  <div class="col-md-6" id="cc">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"   ref={Password}></input>
  </div> 
  <div class="buo">
    <button type="submit" class="btn btn-primary" onClick={handleLogin}>Log in</button> 
  </div>
        </form>
        </div>
    )

    

}
export default Login;
