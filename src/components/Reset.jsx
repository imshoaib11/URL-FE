import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import config from '../utils/config';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Reset() {

  let [token,setToken] = useState("")

  let [newPassword,setnewPassword] = useState("")

  let navigate = useNavigate()
  

  const resetPassword = async() => {
    try{
        let response = await axios.post(`${config.API_URL}${ApiRoutes.RESET.path}`,{
            token,
            newPassword
        })
            if(response.status === 201){
                toast.success(response.data.message)
                navigate('/login')
            }
    }
    catch(error){
        toast.error(error.response.data.message)
    }
  }


  return <>
      <div className='container'>
      <Form>

        <Form.Group className="mb-3">
        <Form.Label>Token</Form.Label>
        <Form.Control type="email" placeholder="Enter your token" onChange={(e)=>setToken(e.target.value)}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" onChange={(e)=>setnewPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>resetPassword()} >
      Reset
      </Button>
    </Form>
      </div>

      <div className='mt-52'>
        <h4 >You will be redirected to Login page once the new password is set</h4>
      </div>
      
  </>

}

export default Reset