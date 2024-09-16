import React, { useEffect,useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast'
import config from '../utils/config'

function Login() {
  let navigate = useNavigate()
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleLogin = async() => {
        try{
        let response = await axios.post(`${config.API_URL}${ApiRoutes.LOGIN.path}`,{
          email,
          password
        })
        if(response.status === 201){
          toast.success(response.data.message)
          navigate('/dashboard')
        }
      }
      catch(error){
        toast.error(error.response.data.message)
      }

  }

  const forgotPassword = () => {
    navigate('/link')
  }

  const signIn = () => {
    navigate('/signup')
  }
  
  return (
    <div className='container'>
      <Form>
       <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary"className='mt-10' onClick={()=>handleLogin()} >
        Log On
      </Button>
      
      <Button variant="primary" className='mt-10' onClick={()=>forgotPassword()} >
        Forgot Password
      </Button>

      <Button variant="primary"className='mt-10' onClick={()=>signIn()} >
        Sign Up
      </Button>
    </Form>

    </div>
  )
}

export default Login