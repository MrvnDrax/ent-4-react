import { useState } from 'react'
import './styles/ModoDark.css'

const ModoDark = () => {

  const [isDark, setIsDark] = useState(true)

  const handleDarkMode = () => {
    setIsDark(!isDark)   
    if (isDark) {
      document.body.classList.add('dark')
      document.querySelector('#container').classList.add('active')   
    } else {
      document.body.classList.remove('dark')  
      document.querySelector('#container').classList.remove('active')  
    }
  }

  return (   
    <div onClick={handleDarkMode} id="container">
      <div className="toggle"></div>
    </div>
  )
}

export default ModoDark