import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

export default function CarSelection(){

    const [yearOpen, setYearOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const [generationOpen, setGenerationOpen] = useState(false);

    return(
    <div className='flex flex-col items-center justify-center py-2'>
        
        <span className='text-white font-medium text-[20px]'>
            Search for exact car model below
        </span>

        <div className='flex gap-1'>
            <div className='flex flex-col gap-1'>
                <button 
                    onClick={() => setYearOpen(!yearOpen)} 
                    className=' bg-[#FFFFFF] text-black px-2 rounded-sm flex items-center gap-1'
                > 
                    Year {yearOpen?<MdArrowDropUp/>:<MdArrowDropDown/>}
                </button>

                {yearOpen&&
                <div className='bg-white rounded-sm p-1'>
                    a
                </div>}
            </div>

            <div className='flex flex-col gap-1'>
                <button 
                    onClick={() => setModelOpen(!modelOpen)} 
                    className='bg-[#FFFFFF] text-black p px-2 rounded-sm flex items-center gap-1'
                > 
                    Model {modelOpen?<MdArrowDropUp/>:<MdArrowDropDown/>}
                </button>
                
                {modelOpen&&
                <div className='bg-white rounded-sm p-1'>
                    a
                </div>}
            </div>

            <div className='flex flex-col gap-1'>
                <button 
                    onClick={() => setGenerationOpen(!generationOpen)} 
                    className='bg-[#FFFFFF] text-black p px-2 rounded-sm flex items-center gap-1'
                > 
                    Generation {generationOpen?<MdArrowDropUp/>:<MdArrowDropDown/>}
                </button>
                
                {generationOpen&&
                <div className='bg-white rounded-sm p-1'>
                    a
                </div>}
            </div>
        </div>

        <div className='relative'>
           <div className='absolute top-1/2 right-[50px] w-20 bg-white h-[1px]'></div>
           <span className='text-[25px] font-semibold text-white'>OR</span>
           <div className='absolute top-1/2 left-[50px] w-20 bg-white h-[1px]'></div>
        </div>

        <div>
            <span className='text-white'>Find what users mostly search</span>
        </div>
    </div>
    )
}