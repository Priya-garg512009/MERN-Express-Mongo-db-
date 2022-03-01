import React,{useState} from 'react'
import axios from 'axios'

 function Home() {

            const sendDataToServer = ()=>{
                    axios.post("http://localhost:8000/user/userdata",{
                        uname:name,
                        upassword:password
                    }).then((res)=>{
                        console.log(res.data)
                    },(err)=>{
                        alert("Error while sending data")
                        console.log(err)
                    })

            }
       const [name,setName]  = useState("")
       const [password,setPassword] = useState("")
    return (
        <div className="container mt-5">
             <div className="row">
                 <div className="col-sm-4"></div>
                 <div className="col-sm-4">
                     <div> 
                         <h2> Submit Details </h2>
                         <div className="form-group mt-2">
                             <input 
                             type="text" 
                             className="form-control" 
                             placeholder="Enter USer name" 
                             onChange={(event)=>{setName(event.target.value)}}
                             />
                         </div>
                         <div className="form-group mt-2">
                             <input type="password" className="form-control" 
                             placeholder="Enter Password" 
                             onChange={(event)=>{setPassword(event.target.value)}}
                             />
                         </div>
                         <button onClick={sendDataToServer} className="btn btn-primary mt-2 px-5">Send</button>
                     </div>
                 </div>
                 <div className="col-sm-4"></div>
             </div>
        </div>
    )
}
export default Home