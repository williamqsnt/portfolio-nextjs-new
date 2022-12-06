import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../public/assets/logo.png'


export default function Menu() {

  const [menu, setMenu] = useState(false);


    return(
        <section style={{backgroundColor : 'rgb(10, 25, 47)', opacity : 1, zIndex : 5, height : '80px', width : '100%', position : 'relative'}}>

        <div style={{width : '100%', height : '100%', display : 'flex', justifyContent : 'space-between'}}>
        <Link href="/"><Image src={logo} alt="logo" width={50} style={{marginLeft : '1em', marginTop : '1em'}} /></Link>
          <button onClick={()=> setMenu(true)} style={{display : 'flex', alignItems : 'center', justifyContent : 'center', width : '80px', backgroundColor : 'unset', border : 'none'}}><p style={{fontSize : '3.5em', color : 'white', cursor : 'pointer'}}>☰</p></button>
          
        </div>
        {menu &&(
          <div style={{position :'absolute', top : '0px', width : '100%'}}>
            <div style={{height : '320px', width : '100%', backgroundColor :'rgb(10,10,10)', display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
              <Link href="apropos">À PROPOS DE MOI</Link>
              <br/>
              <Link href="competences">COMPÉTENCES</Link>
              <br/>
              <Link href="experiences">EXPÉRIENCES</Link>
              <br/>
              <Link href="projets">PROJETS</Link>
              <br/>
              <Link href="contact">ME CONTACTER</Link>
              <br/>
              <button onClick={()=> setMenu(false)} style={{backgroundColor : 'unset', border : 'none', margin : 'unset', padding : 'unset', height : '50px', display : 'flex', alignItems :'center', justifyContent : 'center'}}><p style={{fontSize : '4em', color : 'white'}}>&times;</p></button>
            </div>  
          </div>
        )}
        
      </section>
    )
}