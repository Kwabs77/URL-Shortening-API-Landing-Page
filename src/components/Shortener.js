import {useEffect, useState} from 'react';
import Short from "./Short";

/*const getLocalStorage =() =>{
    let link = localStorage.getItem('link');

    if (link) {
        return JSON.parse(localStorage.getItem('link'))
    }else{
        return []
    }
}*/
const getStoredLinks = JSON.parse(localStorage.getItem("links")) ?? [];
export default function Shortener() {
    const [text, setText] = useState('');
    const [link,setLink] = useState(getStoredLinks);
    const [buttonText,setButtonText] =useState('Copy');
    const [color, setcolor] = useState(true);
    
    const [required, isRequired] = useState('');
    const [istrue,setIsTrue] = useState(false);


    const handleSubmit =(event)=>{
        event.preventDefault();
                if(!text){
                    isRequired('please add a link')
                     setIsTrue(false)
                     setcolor(false)

                }else{
                    setIsTrue(true);
                    isRequired('');
                    setcolor(true)
                    //mod//
                     

                    //mod//
                    const shortenLink = async() =>{
                        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
                        const data = await res.json();
                        console.log(data.result);
                         setLink([...link, data.result])
                        console.log(link)
                        setText('');
                    }

                    shortenLink();

                }
    }
  /*  const handleCopy =()=> {
        navigator.clipboard.writeText(link.full_short_link)
        setButtonText("Copied!");
        
    }*/
    
      useEffect(()=>{
            localStorage.setItem('link',JSON.stringify(link))
        },[link])
  return (
        <>
            <form className="shortener" onSubmit={handleSubmit}>
             <div className='short_flexing'>
                <input  id={color? "input": "notinput"}type = 'text' placeholder="     Shorten a link here..."  value={text}  onChange = {(e) => {setText(e.target.value)}}/>
                <p style={{color:'#F46363', width:'200px'}}>{required}</p>
                </div>
                <button type="submit" onClick = {handleSubmit} >Shorten it!</button>
               
                
            </form>
             { istrue &&  <section  className='info'>
             {link.map((link,index) => (
            <Short key={index} data={link} />
          ))}
            </section>

}
        </>
    )
}
