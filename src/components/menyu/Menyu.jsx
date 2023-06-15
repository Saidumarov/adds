import React from 'react'
import "./menyu.css"
import imgay from "../../assets/ayiq.png"
import meva1 from "../../assets/meva1.png"
import keta from "../../assets/keta.png"
import uzuk from "../../assets/uzuk.png"
import texno from "../../assets/texno.png"
import liv from "../../assets/liv.png"
import sav from "../../assets/sav.png"
import shere from "../../assets/shere.png"
import contact from "../../assets/contact.png"




const Menyu = () => {
  return (
    <div>
      <div className="many">
        <div className="menyu">
          <div className="menyu1">

            <div className="mn1"><p>Filter:</p>
              <p className='p1' style={{ color: "#1754F2" }}>BMW X6</p>
              <p className='p2'>Sort by:</p>
              <p className='p3' style={{ color: "#1754F2" }}>
                Price</p>
              <p className='p4'>321: last updated</p></div>
            <div className="mn2">
              <div className="toy" style={{ backgroundColor: " rgba(80, 140, 255, 0.1)" }}>
                <img src={imgay} alt="" className='ayiq' />
                <p>Toys</p>
              </div>
              <div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div>
              <div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva1} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div>

            </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p>1200$</p> <img src={liv} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav} alt="" className='sherimg' />
              <img src={shere} alt=""  className='sherimg1' />

            </div>
           </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p>1200$</p> <img src={liv} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav} alt="" className='sherimg' />
              <img src={shere} alt=""  className='sherimg1' />

            </div>
           </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p>1200$</p> <img src={liv} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav} alt="" className='sherimg' />
              <img src={shere} alt=""  className='sherimg1' />

            </div>
           </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p>1200$</p> <img src={liv} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav} alt="" className='sherimg' />
              <img src={shere} alt=""  className='sherimg1' />

            </div>
           </div>
          <div className="pasmenyu">
            <div className="pas">
              <div className="ad1"> <div className="addss"><i>adds</i></div>
              <p>Putin studied law at Leningrad State University.</p>
              </div>
              <div className="ad2">
                <p className='ad2p'>Information</p>
                <p>About Us</p>
                <p>News</p>
                <p>About Us</p>
                <p>News</p>
              </div>
              <div className="ad3">
                <p  className='ad2p'>Helpful Links</p>
                <p>Services</p>
                <p>Services</p>
                <p>Privacy Policy</p>
                <p>Privacy Policy</p>


              </div>
              <div className="ad4">
                <p  className='ad2p'>For Partnerships</p>
                <p>Get help</p>
                <p>Get help</p>
                <p>Get help</p>

              </div>
              <div className="ad5">
                <p  className='ad2p'>Contact Us</p>
                <p>+998 90 109-24-35</p>
                Info-adds@gmail.com
                <img src={contact} alt="" />
              </div>

            </div>
            <div className="hr"></div>
            <p className='centr'>FAQ Privacy Terms of Condition</p>
          </div>
          </div>
       

        </div>
   
          <div className="menyu2">
            <img src={keta} alt="" className='keta' />
            <div className="menyu3">
              <img src={uzuk} alt="" className='keta1' />
            </div>
       

        
        </div>
       
      </div>
    </div>
  )
}

export default Menyu