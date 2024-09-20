import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import toast from 'react-hot-toast'

function Dashboard() {

  let [originalUrl,setoriginalUrl] = useState("")
  let [shortUrl,setshortUrl] = useState("")

    const urlShorten = async() => {
          try{
            const response = await axios.post('https://url-be-bh9q.onrender.com/url',{
              url:originalUrl
            })
              setshortUrl(response.data.shortUrl)
              toast.success(response.data.message)
              console.log(response.data.shortUrl)
          }
          catch(error){
            toast.error(error.response.data.message)
          }
    }
  
  return <>
  <div className='input-container'>
      <h2>URL <span>Shortener</span></h2>
      <input
        type="text"
        placeholder="Enter original URL"
        value={originalUrl}
        onChange={(e) => setoriginalUrl(e.target.value)}
      />
      <button onClick={urlShorten}>Shorten URL</button>
      {shortUrl &&(
        <div>

        <p>Shortened URL: </p><span><a href={`https://url-be-bh9q.onrender.com/url/${shortUrl}`} target="_blank" rel="noopener noreferrer">
          {`https://url-be-bh9q.onrender.com//url/${shortUrl}`}
        </a></span>
        
      </div>
      )}
        
    
    </div>
  </>
}

export default Dashboard