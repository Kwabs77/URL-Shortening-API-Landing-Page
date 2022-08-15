import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg';
import { useState } from "react";
import PhoneMenu from './PhoneMenu';


export default function Header() {
  
const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div  className='Header'>
            <img src={logo} alt=''/>
        <div className='list'>
             <ul>                       
                <li><button className='hover'>Features</button></li>
                <li><button className='hover'>Pricing</button></li>
                <li><button className='hover'>Resources</button></li>           
            </ul>           
        </div>          
        <div className='to-the-end'>  
            <ul>
                <li><button id='login'>Login</button></li>
                <li><button className='SignUp'>Sign Up</button></li>
            </ul>
        </div>
        <div className='ham'>
            <button onClick={()=>setIsOpen(!isOpen)}><img src={ham}/></button>
        </div>
    </div>
   {isOpen && <PhoneMenu/>}
   
    </>
  )
}
