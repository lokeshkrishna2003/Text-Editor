import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './components/About'
import Alerts from './components/Alerts'

export default function App(props) {
  const [text,settext]=useState("")
  let handlechange = (e)=>{
    settext(e.target.value)
  }
  let words = text.split(/\s+/).filter((e)=>{
    return e.length>0
  }).length
  let charecters = text.length
  let touppercase = ()=>{
    let newtext = text.toUpperCase()
    settext(newtext)
    showalerts("success","converted to uppercase")
  }
  let tolowercase = ()=>{
    let newtext = text.toLowerCase()
    settext(newtext)
    showalerts("success","converted to lowercase")
  }
  let clear = ()=>{
    let newtext = ""
    settext(newtext)
    showalerts("success","text clared")
  }
  let textformat=()=>{
    let newtext=text.toLowerCase()
    settext(newtext.charAt(0).toUpperCase()+newtext.slice(1))
    showalerts("success","Text formatted")
  }
  let copy=()=>{
    let p = document.getElementById("exampleFormControlTextarea1").value
    navigator.clipboard.writeText(p)
    showalerts("success","copied to clipboard")
  }
  let removewhitespaces=()=>{
    let p = text.split(/\s+/).filter((e)=>{
      return e.length>0
    }).join(" ")
    settext(p)
  }
  const [alert,setalert]=useState(null)
  let showalerts=(type,message)=>{
  
  setalert(  {type:type,
    message:message})
setTimeout(()=>{
  setalert(null)
},900)
  }
const [mode,setmode]=useState("light")
const handlemode=()=>{
  if(mode==="light"){
    setmode("dark")
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    showalerts("success","darkmode enabled")
  }
  else{
    setmode("light")
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    showalerts("success","lightmode enabled")
  }
}

  return (
<>
<Router>
 
 <Navbar place1="Home" place2="About" mode={mode} handlemode={handlemode} />


<div className="alert">
<Alerts alert={alert}  />
</div>
<div className="container">
<Routes>
<Route index element=
 {<Textform title="enter text below" value={text} onchange={handlechange} words={words} charecters={charecters} touppercase={touppercase} tolowercase={tolowercase} clear={clear} textformat={textformat} copy={copy} removewhitespaces={removewhitespaces} />}/>
</Routes>
</div>
<Routes>
  <Route path='/about' element={<About/>}/>
</Routes>
</Router>
</>

  )
}
