import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
//---------------------ICONS------------------------------
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';
import NavLinks from './NavLinks';

export default function NavBar() {

  return(
    <>
    <div className="flex h-10 justify-between text-white">
          
        <Link className='flex h-10 items-center bg-[#FFFFFF] dark:bg-[#141414] px-3' to="/">
        <span className='font-bold text-base md:text-lg tracking-wide text-text_light dark:text-white first-letter:text-pink'>RAFTE.CH</span>
        </Link> 

        <div className="bg-[#1B365D] w-full h-10 flex justify-between">

            <NavLinks/>

            <div className='flex items-center gap-2 px-2 position: relative'>
                <ThemeToggle/>
            </div>
            
        </div>
        
    </div>
    </>
  );
}


function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    return (
        <button onClick={toggleTheme} className='w-12 h-6 rounded-[20px] bg-lol_light px-[2px] py-[2px] overflow-hidden flex justify-center items-center'>
          <div className={`w-[48px] h-[20px] rounded-[16px] transition-colors dark:bg-blue-950 bg-sky-500 flex ${theme !== "dark" ? ('justify-start') : ('justify-end')} items-center p-[2px] position: relative`}>
          <div className='rounded-full bg-primary_light w-[16px] h-[16px] position: absolute dark:left-[2px] left-[26px] transition-all'></div>
          {theme === 'dark' ? (
            <div><IoMoonSharp className='h-[16px] w-[16px] text-yellow-400'/></div>
          ) : (
            <div><IoSunnySharp className='h-[16px] w-[16px] text-yellow-400'/></div>
          )}
          </div>
          
        </button>
    );
}
