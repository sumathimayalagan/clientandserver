import React, { useEffect, useState } from 'react'
import {Link, Route, useHistory, useNavigate} from 'react-router-dom'

const Firstpage = () => {
  const navigate=useNavigate()
  var r=JSON.parse(localStorage.getItem("rrr"));
  useEffect(()=>{
  
  console.log("rr"+r)
 },[])

const [Firstname,setFirstname] = useState('');
const [Lastname,setLastname]=useState('');
const [Location,setLocation]=useState('');
const [Email,setEmail]=useState('');
const [Dob,setDob]=useState('');
const [Education,setEducation]=useState('');
const [About,setAbout]=useState('');



const Add=(context)=>{
    console.log(Firstname+"-"+Lastname+"-"+Location+"-"+Email+"-"+Dob+"-"+Education+"-"+About)
    
   if(r!=null){
    console.log("update");
    fetch("http://localhost:7000/update",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {    
                 
              'id':r,
              'fname':Firstname,
              'lname':Lastname,
              'location':Location,
              'email':Email,
              'dob':Dob,
              'edu':Education,
              'about':About,
                
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        
        localStorage.clear()})
   }
   else{
    console.log("Add data");
    fetch("http://localhost:7000/add",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {   
              'fname':Firstname,
              'lname':Lastname,
              'location':Location,
              'email':Email,
              'dob':Dob,
              'edu':Education,
              'about':About,
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        
        
      })
   }
}
  return (
    
    <div style={{width:'100%',height:'100%'}}> 
    <div id="head">STUDENT MANAGENMENT SYSTEM</div>
    <div className="lk">
    <form action="secondpage.html" autoComplete="off"  >

    <div className='first-name'>
            <pre>First Name    :</pre> 
            <input type="text" id="f"  onChange={(e) =>{ setFirstname(e.target.value);}}></input>
            
    </div>

    <div className="last-name"> <pre >Last Name     :</pre> 
        <input  type="text" id="m" onChange={(e)=>{setLastname(e.target.value);}}></input>
       
    </div>

    <div className="hh">
       <div>
        <pre>Location      :</pre><input type="text" id="sa"  onChange={(e)=>{setLocation(e.target.value);}}/>
        
       </div>

       <div>
        <pre>Email         :</pre><input type="email" id="mail" placeholder="xxx@gmail.com"  onChange={(e)=>{setEmail(e.target.value);}}/>
       
      </div>

       <div>
        <pre>DOB           :</pre>
        <input id="p" type="date" placeholder="DD" pattern="[0-9]*" maxLength="2" size="2"   onChange={(e)=>{setDob(e.target.value);}}/> 
        
      </div>

       <div>
        <pre>Education     :</pre><input type="text"  id="qa"  onChange={(e)=>{setEducation(e.target.value);}}/>
        
      </div>
      
      <div>
       <pre>About         :</pre>
       <input id="re" name="about" className="about"   onChange={(e)=>{setAbout(e.target.value);}}/>
     </div>
<Link to="/sec">
        <input  type="submit" onClick={Add} className="btn" value="submit"/>
        </Link>
      <div >
        
      </div>
</div>
 
</form>
</div>
<p id="coll"></p>
</div>
  )
}

export default Firstpage;