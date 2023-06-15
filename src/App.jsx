import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Layout from "./components/menyu/Layout"
import Nav from "./components/navbar/Nav"
import Menyu from "./components/menyu/Menyu"
import Fut from "./components/futer/Fut"
import Not from "./components/menyu/Not"



const App = () => {

  return (
    <div>
        <Nav/>
 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Menyu/>}/>
              <Route path="/sale" element={<Fut/>}/>
              <Route path="*" element={<Not/>}/>


             



            </Route>
        </Routes>
    
    </BrowserRouter>
    <Outlet/>

    </div>
  )
}

export default App