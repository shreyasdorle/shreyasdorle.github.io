import React, {useRef} from 'react';
import axios from 'axios';
const API_URL = 'https://ib7cm7u21m.execute-api.us-east-1.amazonaws.com';
export default function Chatbox(){

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  const url = `${API_URL}/test/`;
  const inputEl = useRef(null);
  const onButtonClick = function(e){
    e.preventDefault();
    var postData = {
      id: Math.floor(Math.random()*100).toString(),
      message: inputEl.current.value,
      author: 'xyz',
      created_at: Date.now()
    };
    axios.post(url, postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  }

  return(
    <>
      <textarea ref={inputEl} placeholder="What's on your mind?" rows="10" cols="100" />
      <button onClick={onButtonClick}>Submit</button>
    </>
  )
}