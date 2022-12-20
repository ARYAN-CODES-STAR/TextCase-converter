import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState("Enter text here");
    

    const handleUpClick1 = ()=>{
    console.log("Lowercase clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)

  }
  const handleOnChange1 = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const handleUpClick2 = ()=>{
    console.log(" clicked" + text);
    let newText= " ";
    setText(newText)

  }

  


  const handleUpClick3 = ()=>{
    console.log(" clicked" + text);
    let newText= text;
    setText(newText)

  }



  
  const [text1, setText1] = useState("Enter text here");


    return (
      <>
    <div>
   
    <h1>{props.heading}</h1>
    
      <div className="mb-3">

     
  
  <textarea className="form-control" value={text} onChange={handleOnChange1} id="myBox"> </textarea>
</div>
<button className="btn btn-primary inline-block flex" onClick={handleUpClick}>Convert to uppercase</button>
    </div>


    {/* <h1>{props.heading}</h1> */}

    <div className="mb-3">




      {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"> </textarea> */}
    </div>
      <button className="btn btn-primary inline-block flex" onClick={handleUpClick1}> Convert to LowerCase </button>
    

      <button className="btn btn-primary inline-block flex p-8" onClick={handleUpClick2}>Clear Input</button>


      <button className="btn btn-primary inline-block flex p-8" onClick={handleUpClick3}>Undo</button>
      
    </>

  )
}

