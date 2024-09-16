import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import config from '../utils/config';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';

function Link() {

  let [email,setEmail] = useState("")

  const sendLink = async() => {
      try{
        let response = await axios.post(`${config.API_URL}${ApiRoutes.SENDLINK.path}`,{
          email
        })
        if(response.status==201){
          toast.success(response.data.message)
        }
      }


      catch(error){
        toast.error(error.response.data.message)
      } 
  }


  return <>

      <div>
        <h3>Please check your mail a Link will be sent</h3>
      </div>

      <div className='container'>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={()=>sendLink()}>
            Send Link
          </Button>
      </Form>
      </div>

      
      
  </>

}

export default Link