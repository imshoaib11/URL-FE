import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from '../utils/config';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {

  let navigate = useNavigate()

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [phone,setPhone] = useState("")


  const handleSubmit = async() => {
      try{
        let res = await axios.post(`${config.API_URL}${ApiRoutes.SIGNUP.path}`,{
          name,
          email,
          password,
          phone
        })
        if(res.status===201)
          console.log(res.body)
          toast.success(res.data.message)
          navigate('/login')
        //   console.log(res)
        // }
      }
      catch(error){
        toast.error(error.response.data.message)
      }
  } 
  return (
    <div className='container'>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>

      
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Signup