import React, { useState } from 'react';

export default function Home(props) {
    const [text, settext] = useState("");
    const [phldr] = useState("Enter Your Text Here");
    const changetext=(e)=>{
      settext(e.target.value);
    }
    const changetoupper=()=>
    {
        settext(text.toUpperCase());
    }
    const changetolower=()=>
    {
        settext(text.toLowerCase());
    }
    const capitalise=()=>
    {
        settext(text[0].toUpperCase() + text.substring(1));
    }
    const clear=()=>
    {
        settext("");
    }
    const rmvspaces=()=>
    {
        settext(text.replace(/\s+/g, ' ').trim());
    }

    return (
        <>
       {/* //<div className="p-5" Style={`backgroundColor= ${props.mode==='dark'?'white':'black'}`}> */}
       <div  style={{color:props.mode==='light'?'black':'white'}}>
       <div className="p-5" >
           <h1>
            Please Enter your text to Modify IT
           </h1>
         <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changetext} placeholder={phldr} Style='borderRadius:"30px"'></textarea>
         <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-3`} onClick={changetoupper}>Change to Upper </button>
         <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-3`}onClick={changetolower}>Change to lower </button>
         <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-3`} onClick={capitalise}>Capitalize </button>
         <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-3`}onClick={clear}>Clear </button>
         <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-3`}onClick={rmvspaces}>Remove Extra Spaces</button>
                </div>
                </div>
        </>
    )
}
