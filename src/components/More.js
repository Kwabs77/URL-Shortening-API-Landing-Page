import React from 'react'
import more from  "../images/illustration-working.svg";
export default function More() {
  return (
    <>
    <section className='more'>
        <div>
            <h1>  More than just shorter links</h1>
            <p>  Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button>Get started</button>
        </div>
        <div><img src={more} alt=''/></div>





    </section>   
    
    </>
  )
}
