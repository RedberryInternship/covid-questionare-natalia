import React from "react";
import logo from '../assets/images/logo.png'
import '../index.css'
const StartQuestions = () => {
    return (<div className="flex flex-col justify-center items-center text-center h-screen -mt-20">
        <img className=" w-[6.25rem] logo-animation" src={logo} alt='logo' />
        <a href="/"
            className=" text-3xl font-bold mt-24 cursor-pointer hover:text-shadow-2xl questions-animation ">
            კითხვარის <br /> დაწყება
        </a>
    </div>)
}


export default StartQuestions