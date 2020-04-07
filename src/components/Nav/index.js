import React, { useState } from 'react';
import { Menu } from 'antd';

export default function Nav(){
  const [current, setCurrent] = useState('home')

  const handleClick = function(e){
    setCurrent(e.key)
    window.location.href = '/#'+e.key
  };

  return(
    <div className="nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="about">
          About
        </Menu.Item>
        <Menu.Item key="skills">
          Skills
        </Menu.Item>
        <Menu.Item key="experience">
          Experience
        </Menu.Item>
      </Menu>
    </div>
  )
}