import React from 'react';
import './index.css';
import Background from '../../images/background-image.jpeg';


export default function Home(){
  const height = window.innerHeight - 48;
  return(
    <div id="home" className="home">
      <div className="bg-image" style={{backgroundImage: `url(${Background})`, height: height }}>
        <div className="text-container">
          <h1>Hello! My name is Shreyas Dorle.</h1>
        </div>
      </div>
    </div>
  )
}