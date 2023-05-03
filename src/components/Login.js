import React from 'react'
import facebooklogin from '../images/facebookloginimg.svg'
import googlesignin from '../images/googlesigninimg.svg'

function Login() {
    
    const history=useNavigate();

    const [email,setEmail]=useState(``)
    const [password,setPassword]=useState(``)

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data="notexist"){
                    alert("User is not logged in")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);

        }
    }
  
    return (
    <div>
        <div className='signupboxcontainer'>
          <div className='signupptagcontainer'>
          <p className='signupboxptag'>Sign Up Now</p>
          <p className='signupboxptagmiddle'>Free access to a live chat</p>
          <p className='signupboxptag'>Create a free profile and start chatting</p>
          </div>
          <div className='signupboxsubmit'>
          <form action='POST'>
            <input type="email" class='emailbox'onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-Mail'/>
            <input type="password" class='passwordbox'onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/></form>
          <div class='loginbuttonbox'>
            <a class='loginbutton' href='' type='submit' onClick={submit}>Login</a>
            <a class='signupbutton' href=''>Sign-Up</a>
          </div>
          <img class='ssobtns' src={googlesignin} alt='google sign in button'></img>
          <img class='ssobtns' src={facebooklogin} alt='facebook login button'></img>
          </div>
        </div>
        </div>
  )
}

export default Login