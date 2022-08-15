import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import customize from '../images/icon-fully-customizable.svg'



export default function Statistics() {
  return (
    <>
    <section className='statistics'> 
            <div >
                <div className='center'>
                <h2>Advanced Statistics</h2>    
                <p className='para'>  Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='padding'>
                    <div className='line'></div>
                    <article className='art relative' >
                        <img src={brand} className='image' alt=''/>
                        <h3>Brand recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </article>
                    <article className='art'>
                        <img src={records} className='image' alt=''/>
                        <h3>Detailed records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </article>
                    <article className='art relative'>
                        <img src={customize}alt='' className='image'/>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </article>
                </div>

            </div>

     </section>
    </>
  )
}
