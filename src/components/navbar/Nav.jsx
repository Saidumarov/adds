import React, { useRef } from 'react'
import "./nav.css"
import img from "../../assets/map.png"
import img1 from "../../assets/odam.png"
import Menyu from '../menyu/Menyu'


const Nav = () => {
    const inputref  = useRef(null)
    const click = (e) =>{
        e.preventDefault();
        reset()
    }
    const reset = () => {
        if (inputref.current) {
          inputref.current.value = "";
        }
      };
    return (
        <div>
            <nav>
                <div className="nav">
                    <div className="nav-itme">
                        <p style={{color:"black"}}>  <i class="fa-solid fa-location-dot"></i> Ташкент</p>
                        <p>About marketplace</p>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>Public offering</p>
                        <div className="nav-itme1">
                            <p>Interface language</p>
                            <p>Have a question?</p>
                        </div>

                    </div>


                </div>
                <div className="serch">
                    <div className="adds"><i>adds</i></div>
                    <div className="serchh">
                        <form >
                            <input type="text" placeholder='Search...'   ref={inputref} />
                            <button className='button' type='submit' onClick={click}><i class="fa-solid fa-magnifying-glass"></i> </button>
                       
                        </form>
                    </div>
                    <div className="img">
                        <img src={img} alt="" className='img1' />
                        <img src={img1} alt="" className='img2' />

                    </div>
                </div>
        
            </nav>
       
        
        </div>
    )
}

export default Nav

