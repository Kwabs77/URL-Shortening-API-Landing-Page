import React, { useEffect, useState } from 'react'

export default function Short({data}) {
  const [copied,setCopied]= useState(false);
  const copyLink = async ()=>{
        await navigator.clipboard.writeText(data.full_short_link);
        setCopied(true);

  };

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [copied]);
  
  
  
  
  
  return (
<>
<div className='copy'>
        <div className='div_info'>{data.original_link}</div><hr/>
                <div>
                                <ul className='short_flex'>
                                    <li><button id='short'>{data.short_link}</button></li>
                                    <li ><button id = 'short1' onClick={copyLink}>{copied ? "Copied!" : "Copy"}</button></li>
                                </ul>
                </div>
           </div>

     
</>  

)
}



