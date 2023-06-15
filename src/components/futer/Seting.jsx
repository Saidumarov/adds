import React from 'react'
import "./set.css"
import odam from "../../assets/sayyoh1.png"
import in1 from "../../assets/in1.png"
import in2 from "../../assets/in2.png"
import in3 from "../../assets/in3.png"


const Seting = () => {
    return (
        <div>
            <div className="set">
                <div className="set1">
                    <div className="imgset">
                        <img src={odam} alt="" className='say' />
                        <p className='imgsetp'><p>Shaxriyor Oripov </p> <span>#2389955</span></p>
                        <p className='edit'><i class="fa-solid fa-pen-to-square"></i> <span>Edit profile</span></p>
                    </div>
                    <div className="data">
                        <p>Peronal data:</p>
                        <div className="data1">
                            <input type="name" className='in1' placeholder='Name' />
                            <input type="password" className='in2' placeholder='Password' /> <br />
                            <input type="tel" className='in3' placeholder='+998 (90) ___ __ __' />
                            <img src={in1} alt="" className='inimg1' />
                            <img src={in2} alt="" className='inimg2' />
                            <img src={in3} alt="" className='inimg3' />



                        </div>
                        <div className="data2">
                            <p>Interface settings:</p>

                            <div className="togle">
                                <select name="" id="">
                                    <option value="English">English</option>
                                </select>
                            </div>
                            <div className="tog">
                                <p>  Notification <i class="fa-solid fa-toggle-on"></i></p>
                            </div>
                            <div className="tog1">
                                <p>  Dark theme <i class="fa-solid fa-toggle-on"></i></p>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seting