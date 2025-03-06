import Link from 'next/link';
import  Image  from "next/image";
import upeLogo from '../assets/upe.png';
import "./page.css"

export default function Navbar(){
    return(
        <div className='sub'>
           <div className='subHomeHeader'>
                   <Image
                   className='upeLogo'
                     src={upeLogo}
                     alt='upeLogo'
                     style={{width:'70px'}}
                   />
                   <div className='subHeaderText'>
                     <h1 style={{color:'white', fontSize:'24px'}}>UPSILON PI EPSILON</h1>
                     <p style={{fontSize:'10px', lineHeight:'normal'}}>INTERNATIONAL HONOR SOCIETY FOR COMPUTING AND INFORMATION DISCIPLINE</p>
                   </div>
            </div>
            <div className='subNavbar'>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/membership">Membership</Link>
                <Link href="/events">Events</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/gallery">Gallery</Link>
            {/* <Link href="/dashboard">Dashboard</Link> */}
            </nav>
            </div>
            
        </div>
    )
}