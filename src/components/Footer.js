import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import pinterest from '../images/pinterest.svg';
import logofooter from '../images/logofooter.svg'


export default function Footer() {
  return (
    <>
    <div className='footer'>
        <article>
        <img src={logofooter} alt=''/>                        
        </article>
        <article>
            Features
            <ul>
                <li><button>Link Shortening</button></li>
                <li><button>Branded Links</button></li>
                <li><button>Analytics</button></li>
            </ul>
        </article>

        <article>
            Resources
            <ul>
                <li><button>Blog</button></li>
                <li><button>Developers</button></li>
                <li><button>Support</button></li>
            </ul>
            
        </article>


        <article>
            Company
            <ul>
                <li><button>About</button></li>
                <li><button>Our Team</button></li>
                <li><button>Careers</button></li>
                <li><button>Contact</button></li>
            </ul>
        </article>

        <section >
             <ul className='footer-list-flex' >
                <li><img src={facebook}/></li>
                <li><img src={pinterest}/></li>
                <li><img src={twitter}/></li>
                <li><img src={instagram}/></li>
            </ul>          
        </section>
    </div>    
    </>
  )
}
