import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
//---------------------ICONS------------------------------
import { FaFileCsv,FaShoppingBag  } from "react-icons/fa";
import { SiLeagueoflegends } from "react-icons/si";
import { RxOpenInNewWindow } from "react-icons/rx";
import { GrSystem, GrPaint, GrArticle  } from "react-icons/gr";
import { MdArrowDropDown, MdArrowDropUp, MdTheaters  } from 'react-icons/md';
import { FaRankingStar, FaApple, FaScissors  } from "react-icons/fa6";
import {  IoLogoGameControllerB } from "react-icons/io";
import { SiVolvo } from "react-icons/si";


export default function NavLinks(){
    const linksRef = useRef<HTMLDivElement>(null);

    const [showLinks, setShowLinks] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (linksRef.current && !linksRef.current.contains(event.target as Node)) {
            setShowLinks(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const Array = [
        {subdomain:"lol",    name:"League of Legends", icon: <SiLeagueoflegends />},
        {subdomain:"csv",    name:"CSV Reader",        icon: <FaFileCsv />},
        {subdomain:"influ",  name:"InfluRank",         icon: <FaRankingStar />},
        {subdomain:"iphone", name:"Iphone",            icon: <FaApple />},
        {subdomain:"cinema", name:"Cinema",            icon: <MdTheaters />},
        {subdomain:"os",     name:"Rafte.ch OS",       icon: <GrSystem />},
        {subdomain:"art",    name:"Artwork",           icon: <GrPaint />},
        {subdomain:"blog",   name:"Blog",              icon: <GrArticle />},
        {subdomain:"hair",   name:"Hairdresser",       icon: <FaScissors />},
        {subdomain:"shop",   name:"Shop",              icon: <FaShoppingBag />},
        {subdomain:"games",  name:"Games",             icon: <IoLogoGameControllerB />},
        {subdomain:"volvo",  name:"Volvopedia",        icon: <SiVolvo />},
      ]

    const AAA = () => setShowLinks(!showLinks)


    function getSubdomain(url:any) {
        const hostname = new URL(url).hostname;
        const parts = hostname.split('.');
        if (parts.length >= 2) {
            return parts[0];
        }
        return null; 
      }
      const currentSubdomain = getSubdomain(window.location.href);
    

    return(
    <div ref={linksRef} className='flex items-center position: relative z-50'>
      <button onClick={AAA} className='flex gap-1 items-center'>
        <div className={`flex justify-between h-10 items-center font-medium text-sm hover:bg-[#202A44] w-[175px]`}>
            <span className="flex items-center">
                <SiVolvo  className='mx-1'/>
                Volvopedia
            </span>
            {!showLinks ? (<MdArrowDropDown className='w-5 h-5'/>):(<MdArrowDropUp className='w-5 h-5'/>)}
        </div>
        {showLinks && <div className='absolute top-full left-0 w-[175px] bg-[#1B365D] flex flex-col content-center z-10 rounded-b-md overflow-hidden'>
                {Array.filter(item => item.subdomain !== currentSubdomain).map((item, index) => (
                  <Link to={`https://${item.subdomain}.rafte.ch`} target="_blank" key={index} className='h-8 py-1 flex gap-1 justify-between items-center px-2 hover:bg-[#202A44] border-t-[1px] border-[#202A44]'>
                    <div className='flex gap-1 justify-between items-center'>{item.icon}<span className='text-xs'>{item.name}</span></div>
                    <RxOpenInNewWindow  className='text-white w-3 h-3'/>
                  </Link>
                ))}
              </div>}
      </button>
    </div>
    )
}