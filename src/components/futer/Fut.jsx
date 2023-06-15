import React from 'react'
import "../menyu/menyu.css"
import imgaya from "../../assets/ayiq.png"
import meva11 from "../../assets/meva1.png"
import keta1 from "../../assets/keta.png"
import uzuk1 from "../../assets/uzuk.png"
import texno1 from "../../assets/texno.png"
import liv1 from "../../assets/liv.png"
import sav1 from "../../assets/sav.png"
import shere1 from "../../assets/shere.png"



const Fut = () => {
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
                <img src={imgaya} alt="" className='ayiq' />
                <p>Toys</p>
              </div>
              <div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div>
              <div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div><div className="toy">
                <img src={meva11} alt="" className='ayiq' />
                <p>Wealthy</p>
              </div>

            </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno1} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p style={{color:"#F23636"}}>1200$</p> <img src={liv1} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav1} alt="" className='sherimg' />
              <img src={shere1} alt=""  className='sherimg1' />

            </div>
           </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno1} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p style={{color:"#F23636"}}>1200$</p> <img src={liv1} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav1} alt="" className='sherimg' />
              <img src={shere1} alt=""  className='sherimg1' />

            </div>
           </div>
           <div className="tex">
            <div className="texno">
              <img className='texnoimg' src={texno1} alt="" />
              <p className='texnop'>Texnomart</p>
              <button>Follow me</button>
            </div>
            <div className="mac"></div>
            
            <div className="xabar">
            <p className='mmc'>MacBook Pro</p>
            <p className='m1'><b>M1</b></p>
            <p className='flx'><p style={{color:"#F23636"}}>1200$</p> <img src={liv1} alt="" /></p>
            </div>
            <div className="sher">
              <img src={sav1} alt="" className='sherimg' />
              <img src={shere1} alt=""  className='sherimg1' />

            </div>
           </div>
            
           
       
          </div>
       

        </div>
   
          <div className="menyu2">
            <img src={keta1} alt="" className='keta' />
            <div className="menyu3">
              <img src={uzuk1} alt="" className='keta1' />
            </div>
       

        
        </div>
       
      </div>
    
    </div>
  )
}

export default Fut