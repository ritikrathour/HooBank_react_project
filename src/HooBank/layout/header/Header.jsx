import React, { useState } from "react"; 
import { Nav__links__data } from "../../Hoobank_data";
const Header = () => {
    const [show_nav,setShow_nav] = useState(false);
    return (
        <>
            <header className="header w-[100%] sticky top-0 h-[3rem] bg-slate-950 z-10 ">
                <nav className="nav__bar App__container items-center flex justify-between h-[100%]">
                    <a href="#">
                        <img src="assets/HooBank.png" className="w-[100px]" alt="hoobank" />
                    </a>
                    <ul className={`nav__list left-0 text-center sm:flex sm:justify-end sm:static sm:gap-4 overflow-hidden absolute w-full top-[48px] bg-slate-900 sm:bg-slate-950  sm:max-h[20px] ${show_nav?"max-h-[500px]" : "max-h-[0] sm:max-h-fit"}`}>
                        {
                            Nav__links__data.map((item) => {
                                return (
                                    <li className="nav__item py-[10px]" key={item.id}>
                                        <a href="#" className="link text-[16px]">{item.link_name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="toggle__menu sm:hidden cursor-pointer" onClick={()=>setShow_nav(!show_nav)}>
                        {
                        (!show_nav)?(<i className="fas fa-bars"></i>):(<i className="fas fa-times"></i>)}
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;