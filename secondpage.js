import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Secondpage = () => {
  var r=JSON.parse(localStorage.getItem("rrr"));
console.log(r)
// alert(r)
const [Firstname,setFirstname] = useState('');
const [Lastname,setLastname]=useState('');
const [Location,setLocation]=useState('');
const [Email,setEmail]=useState('');
const [Dob,setDob]=useState('');
const [Education,setEducation]=useState('');
const [About,setAbout]=useState('');

const sel=()=>{
    fetch("http://localhost:7000/select",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {
                
            }
        )

})
        .then ((response)=>response.json())
        .then((res)=>{
            console.log("sucess :",res);
            show(res.data);
        })
}
sel();
function show(res) {
   
	let tab =
		`<tr class=".justify-content-center ">
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th class=".justify-content-center">Location</th>
        <th>Email</th>
        <th>DOB</th>
        <th>Education</th>
        <th>About</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>`;
	
	res.forEach(r=> {  
		let edit='<Link to="/"> Edit</Link>'
            console.log(r); 
            var idd=r.id;
            tab += `<tr>
            <td>${r.id}</td>
            <td>${r.firstname}</td>
            <td>${r.lastname}</td>
            <td>${r.location}</td>
            <td>${r.email}</td>
            <td>${r.dob}</td>
            <td>${r.education}</td>
            <td>${r.about}</td>
            <td><button class="btn-primary" onclick= {localStorage.setItem("rrr",${idd});}>${edit}</button></td>
            <td><button class="btn-danger" onclick={localStorage.setItem("id",${idd});${Dele()}}>Delete</button></td>
        </tr>`;
              
	})
	document.getElementById("collections").innerHTML = tab;
}
const Dele=()=>{
    let r=localStorage.getItem('id')
    console.log("rrrrr",r);
    fetch("http://localhost:7000/delet",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {
                'id':r,                
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        localStorage.clear()
        sel()
        
        
    })
}



  return (
    <div class="container fluid">
    <h2>Student Managenment System</h2>
<div >
    
    <Link to="/">
    <input  type="submit" class="btn-two" value="ADD"/>
    </Link>
</div>
<table id="collections" border="1px" class="table table-striped ">
    
  
  </table>
</div>
  )
}

export default Secondpage;