import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#fff');
        setTextColor('#000')
      }
      else {
        setColor('transparent');
        setTextColor('#fff');
      }
    }

    window.addEventListener('scroll', changeColor);
  },[])



  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
            Capture
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="sm:flex hidden">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile menu  */}
        <div
          onClick={handleNav}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? <AiOutlineClose style={{ color: `${textColor}` }} size={20} /> : <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />}
        </div>
        <div
          className={`${
            nav ? "left-0" : "left-[-100%]"
          } "sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center
        w-full h-screen bg-black text-center ease-in transition-all duration-300"`}
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
