import React, { useRef, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import "./layout.css"
import "./menyu.css"
import imgp from "../../assets/pp.png"
import imgch from "../../assets/patch.png"
import imgch1 from "../../assets/chat.png"
import imgch2 from "../../assets/new.png"
import imgch3 from "../../assets/sel.png"
import imgch4 from "../../assets/set.png"
import apple from "../../assets/apple.png"
import contt from "../../assets/newcont.png"



const Layout = () => {
  const [Top, setTop] = useState("0px");

  const Click1 = () => {
    setTop("0px");
  };
  const Click2 = () => {
    setTop("49px");
  };
  const Click3 = () => {
    setTop("98px");
    setModal(true);
  };
  const Click4 = () => {
    setTop("147px");
  };
  const Click5 = () => {
    setTop("190px");
  };

  const inputref = useRef(null)
  const click = (e) => {
    e.preventDefault();
    reset()
  }
  const reset = () => {
    if (inputref.current) {
      inputref.current.value = "";
    }
  };

  const [Modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
         {Modal && (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal1">
          <p className='sub'>Subscribed</p>
          <form >
            <input type="text" placeholder='Search...' className='input' ref={inputref} />
            <button className='button1' type='submit' onClick={click}><i class="fa-solid fa-magnifying-glass"></i>
             </button>    
          </form>
          <div className="flow"><img src={contt} alt="" /> <p>Makler mazsulotlari do’koni <br />#3876974
          </p>  <button className='unf'>Unfollow</button></div>
          <div className="flow"><img src={contt} alt="" /> <p>Makler mazsulotlari do’koni <br />#3876974
          </p>  <button className='unf'>Unfollow</button></div>
          <div className="flow"><img src={contt} alt="" /> <p>Makler mazsulotlari do’koni <br />#3876974
          </p>  <button className='unf'>Unfollow</button></div>
          <div className="flow"><img src={contt} alt="" /> <p>Makler mazsulotlari do’koni <br />#3876974
          </p>  <button className='unf'>Unfollow</button></div>
       
        <button className='calsel' onClick={closeModal}>Cancel</button>
     
        
        </div>
      </div> )} 
      <div className="con">
        <div className="mney">
          <div className="mny1">
            <div className="profil1">
              <div className="profil">
                <img src={imgp} alt="" className='pimg' />
                <div className="imgy">
                  <div className="imgd"></div>
                </div>
                <p className='imp'>Saidumarov Ja'farxon
                  <p className='imp1'>  @username</p> </p>
              </div>
              <ul>
                <li onClick={Click1}><Link to="/" className='a'><div className="dd"><img src={imgch} alt="" className='pt' /> <p>Subscribed</p></div></Link></li>
                <li onClick={Click2}><Link to="/chat " className='a'><div className="dd"><img src={imgch1} alt="" className='pt1' /> <p>Chat</p></div></Link></li>
                <li onClick={Click3}><Link to="/ " className='a'><div className="dd"><img src={imgch2} alt="" className='pt' /> <p>News</p></div></Link></li>
                <li onClick={Click4}><Link to="/sale " className='a'><div className="dd"><img src={imgch3} alt="" className='pt' /> <p>Sale</p></div></Link></li>
                <li onClick={Click5}><Link to="/ " className='a'><div className="dd"><img src={imgch4} alt="" className='pt4' /> <p>Settings</p></div></Link></li>
                <div className="sur" style={{ marginTop: Top }}></div>

              </ul>
            </div>



          </div>
          <div className="mny2">
            <div className="bra"><p>Brands</p> <span>See all</span></div>
            <div className="app">
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
              <div className="ap">
                <img src={apple} alt="" />
                <p>Apple</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

    </div>
  )
}

export default Layout