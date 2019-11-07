import React, {useState, useEffect} from 'react';
import axios from 'axios';
const API_URL = 'https://ib7cm7u21m.execute-api.us-east-1.amazonaws.com';

export default function MessageList(){
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    const url = `${API_URL}/test/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      setMessages(data);
     })
  }, []);
  
  return(
    <>
      <h3>Messages/Queries</h3>
      {
        messages && messages.map((value, index) => {
          return (
            <div className='row' key={index}>
              <div className="col p-4">
                {value.message}
              </div>
            </div>
          )
        })
      }
    </>
  )
}