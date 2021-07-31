
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const home = () => {

    const [Isopen, setIsopen] = useState(false)

  function toggle(){
     setIsopen(!Isopen)
     
  }
    return (
        <>
            <Sidebar isopen={Isopen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default home
