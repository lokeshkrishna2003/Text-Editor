import React from 'react'

export default function Textform(props) {
  return (
<>
<div className="mb-3 my-34" style={props.mode}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control" value={props.value} onChange={props.onchange} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<h4>preview :</h4>{(props.value.length>0)?<b>{props.value}</b>:"enter some text to preview"}
<div className='my-3'>
words {props.words} & charecters {props.charecters}
</div>

<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.touppercase}>touppercase</button>
<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.tolowercase}>tolowercase</button>
<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.clear}>clear</button>
<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.textformat}>formattext</button>
<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.removewhitespaces}>remove whitespace</button>
<button type="button" className={`btn btn-secondary ${props.value.length>0?"":"disabled"} `}  onClick={props.copy}>copy</button>






</>

  )
}
